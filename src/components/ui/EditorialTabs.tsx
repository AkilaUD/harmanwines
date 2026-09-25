"use client";

import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type EditorialTabItem = {
  id: string;
  label: string;
  panel?: ReactNode;
};

type Props = {
  items: EditorialTabItem[];
  label: string;
  className?: string;
  tabClassName?: (selected: boolean) => string;
  defaultIndex?: number;
  /** Controlled mode */
  index?: number;
  onIndexChange?: (index: number) => void;
  /** Hide default panel chrome when parent renders panels */
  hidePanels?: boolean;
};

/**
 * Accessible tablist: roles, aria-controls, tabpanel, arrow keys, Home/End.
 */
export function EditorialTabs({
  items,
  label,
  className,
  tabClassName,
  defaultIndex = 0,
  index: controlledIndex,
  onIndexChange,
  hidePanels,
}: Props) {
  const baseId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultIndex);
  const active = controlledIndex ?? uncontrolled;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback(
    (i: number) => {
      if (controlledIndex === undefined) setUncontrolled(i);
      onIndexChange?.(i);
      tabRefs.current[i]?.focus();
    },
    [controlledIndex, onIndexChange],
  );

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = items.length - 1;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      next = i === last ? 0 : i + 1;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      next = i === 0 ? last : i - 1;
    } else if (e.key === "Home") {
      e.preventDefault();
      next = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      next = last;
    } else {
      return;
    }
    select(next);
  };

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={label}>
        {items.map((item, i) => {
          const selected = active === i;
          const tabId = `${baseId}-tab-${item.id}`;
          const panelId = `${baseId}-panel-${item.id}`;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={
                tabClassName
                  ? tabClassName(selected)
                  : cn(
                      "px-4 py-2 text-xs tracking-[0.16em] uppercase border transition-colors",
                      selected
                        ? "border-current bg-current/10"
                        : "border-current/25 opacity-70 hover:opacity-100",
                    )
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {!hidePanels &&
        items.map((item, i) => {
          const selected = active === i;
          const tabId = `${baseId}-tab-${item.id}`;
          const panelId = `${baseId}-panel-${item.id}`;
          if (!item.panel) return null;
          return (
            <div
              key={item.id}
              role="tabpanel"
              id={panelId}
              aria-labelledby={tabId}
              hidden={!selected}
              className={selected ? "mt-12" : undefined}
            >
              {selected ? item.panel : null}
            </div>
          );
        })}
      {/* Hidden panel ids for aria-controls when panels rendered externally */}
      {hidePanels &&
        items.map((item, i) => (
          <span
            key={`anchor-${item.id}`}
            id={`${baseId}-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={active !== i}
            className="sr-only"
          >
            {item.label}
          </span>
        ))}
    </div>
  );
}

export function editorialPanelId(baseId: string, itemId: string) {
  return `${baseId}-panel-${itemId}`;
}
