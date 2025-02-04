export const Button = {
  baseStyle: {
    lineHeight: "1.2",
    transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
    border: "none",
    p: "16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "700",
    bg: "gray.700",
    color: "shade.white",
    outline: "none",
    _disabled: {
      opacity: 1,
      bg: "gray.100",
      _hover: {
        opacity: "1",
        bg: "gray.100",
      },
    },
    _loading: {
      opacity: 1,
      bg: "gray.100",
      _hover: {
        opacity: "1",
        bg: "gray.100",
      },
    },
  },

  variants: {
    rounded: {
      bg: "gray.400",
      borderRadius: "32px",
    },
    outlined: {
      bg: "transparent",
      borderRadius: "2rem",
      border: "1px",
      borderColor: "gray.600",
    },
  },
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
