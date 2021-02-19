import coffee from '../../assets/images/coffee.jpg';
import tea from '../../assets/images/tea.jpg';

const slides = [

  {
    title: "Coffie",
    description: "Out products a widely known all over the World",
    link: {
      label: "Get more info...",
      href: "/"
    },
    background: `url(${coffee})`
  },

  {
    title: "Tea",
    description: "Imagine the perfect tea. Its unique bouquet is rich in shades, the infusion is deep and bright, the aroma is subtle and expressive.",
    link: {
      label: "Get more info...",
      href: "/"
    },
    background: `url(${tea})`
  },
];

export default slides