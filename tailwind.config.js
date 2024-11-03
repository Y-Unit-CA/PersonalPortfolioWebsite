/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "colors-text-text-primary-on-brand": "#fff",
        "colors-base-black": "#000",
        black: "#12141d",
        gainsboro: {
          "100": "#ebe5e0",
          "200": "#e4e4e7",
          "300": "#e3dcd4",
          "400": "#d9d9e1",
          "500": "#d9d9d9",
        },
        gray: {
          "100": "rgba(10, 13, 18, 0.2)",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(18, 20, 29, 0.8)",
        },
        whitesmoke: "#f5f1ee",
        darkslategray: "#2d2d2d",
        "colors-text-text-tertiary-on-brand": "#e9d7fe",
        "component-colors-components-avatars-avatar-contrast-border":
          "rgba(0, 0, 0, 0.08)",
        darkgreen: "#1a6e17",
        "blue-gray-700": "#334155",
        "gradient-gray-900-700-45deg": "#181d27",
        steelblue: "#1275b1",
      },
      spacing: {
        "container-padding-mobile": "16px",
        "container-max-width-desktop": "1280px",
        "spacing-xl": "16px",
        "spacing-md": "8px",
        "spacing-xxs": "2px",
        "spacing-sm": "6px",
      },
      fontFamily: {
        "inter-regular-18": "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "9980xl": "9999px",
        "4xs-8": "8.8px",
        "73xl-8": "92.8px",
        "radius-full": "9999px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "27xl": "2.875rem",
      "18xl": "2.313rem",
      "9xl": "1.75rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "11xl": "1.875rem",
      "71xl": "5.625rem",
      "26xl": "2.813rem",
      "8xl": "1.688rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
