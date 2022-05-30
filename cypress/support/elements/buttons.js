const buttons = {
  blueBt: () => {
    return '[class="button"]' 
  },
  redBt: () => {
    return '[class="button alert"]'
  },
  greenBt: () => {
    return '[class="button'
  },
  editBt: () => {
    return 'a[href*="edit"]'
  },
  deleteBt: () => {
    return 'a[href*="delete"]'
  },
};

export default buttons;
