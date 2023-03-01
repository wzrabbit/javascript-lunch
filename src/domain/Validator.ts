const RESTAURANT_CATEGORIES = [
  '한식',
  '중식',
  '일식',
  '아시안',
  '양식',
  '기타',
];

const RESTAURANT_DISTANCES = ['5', '10', '15', '20', '25', '30'];

const REGEX = {
  link: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-z]+).*$/,
};

const Validator = {
  checkCategory: (category: string) => {
    if (!Validator.isRestaurantCategory(category)) {
      throw new Error('에러 1');
    }
  },

  isRestaurantCategory: (category: string) => {
    return RESTAURANT_CATEGORIES.includes(category);
  },

  checkName: (name: string) => {
    if (Validator.isBlank(name.trim())) {
      throw new Error('에러 2');
    }
  },

  isBlank: (name: string) => {
    return name.length === 0;
  },

  checkDistance: (distance: string) => {
    if (!Validator.isRestaurantDistance(distance)) {
      throw new Error('에러 3');
    }
  },

  isRestaurantDistance: (distance: string) => {
    return RESTAURANT_DISTANCES.includes(distance);
  },

  checkLink: (link: string) => {
    if (!Validator.isLink(link)) {
      throw new Error('에러 4');
    }
  },

  isLink: (link: string) => {
    return REGEX.link.test(link);
  },
};

export default Validator;
