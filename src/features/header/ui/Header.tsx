"use client";
import classes from "./Header.module.scss";
import { HeaderProps } from "../types/types";
import { useBoolean } from "usehooks-ts";
import { Text } from "@/shared";
import { useEffect, useRef } from "react";
import Link from "next/link";

export const Header = ({ items }: HeaderProps) => {
  return (
    <header className="w-full bg-bg-layout sticky top-0 z-50">
      <nav className="w-full hidden lg:block">
        <ul className="w-full justify-center flex items-center gap-8 px-4">
          {items.map((item, index) => (
            <li key={index} className={classes.item}>
              <Link className="block lg:pt-6 lg:pb-7" href={`#${item.href}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <HeaderMobile items={items} />
    </header>
  );
};

function HeaderMobile({ items }: HeaderProps) {
  const { value: isOpen, toggle } = useBoolean(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="flex flex-1 items-center justify-end lg:hidden bg-white relative h-[72px] border-none">
      <button
        onClick={toggle}
        className="flex px-8 py-6 rounded-md absolute top-0 right-0 z-[100]"
        aria-label="Open menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <HeaderMobileMenu isOpen={isOpen} close={toggle} items={items} />
    </div>
  );
}

type HeaderMobileMenuProps = HeaderProps & {
  close: () => void;
  isOpen: boolean;
};

function HeaderMobileMenu({ close, isOpen, items }: HeaderMobileMenuProps) {
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  if (isInitialRender.current) return null;

  return (
    <div
      className="fixed flex flex-col items-end gap-12 inset-0 bg-white z-50 pt-5"
      style={{
        animation: isOpen
          ? "slideIn 0.3s ease-out forwards"
          : "slideOut 0.3s ease-out forwards",
      }}
    >
      <span></span>
      <span></span>
      <nav className="px-10">
        <ul
          className="flex flex-col gap-6"
          style={{
            animation: isOpen
              ? "fadeIn 0.3s ease-out 0.1s forwards"
              : "fadeOut 0.3s ease-out 0.1s forwards",
            opacity: 0,
          }}
        >
          {items.map((item, index) => (
            <li key={index} className="text-right">
              <Link onClick={close} href={`#${item.href}`}>
                <Text as="span">{item.label}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
