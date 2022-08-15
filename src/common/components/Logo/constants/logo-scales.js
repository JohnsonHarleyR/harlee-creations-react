

export const LogoScale = {
  body: {
    getWidth: (height) => {
      return 448 * height / 386;
    },
    getHeight: (width) => {
      return 386 * width / 448;
    },
  },
  head: {
    getWidth: (height) => {
      return 607 * height / 227;
    },
    getHeight: (width) => {
      return 227 * width / 607;
    },
  },
}