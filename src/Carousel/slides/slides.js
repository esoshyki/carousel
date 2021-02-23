import coffee from '../../assets/images/coffee.jpg';
import tea from '../../assets/images/tea.jpg';
import spices from '../../assets/images/spices.jpg';

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

  {
    title: "Spices",
    description: "The Spice House has spent over 60 years curating a global network of premium spice growers to offer unrivaled quality, selection, and freshness. Over this time, the spices in this collection represent the spices our customers return to over and over again. If there's one spice you should buy from the Spice House, make it our spicy and sweet Saigon cinnamon. After that, try our expertly-crafted proprietary spice blends like Back of the Yards, Lake Shore Drive, and Gateway to the North which have become indispensable kitchen essentials for nearly all of our customers.",
    link: {
      label: "Get more info...",
      href: "/"
    },
    background: `url(${spices})`
  },

];

export default slides