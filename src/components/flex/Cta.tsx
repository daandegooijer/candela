import { storyblokEditable } from "@storyblok/react/rsc";

const Cta = ({ blok }: { blok: CtaStoryblok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-linear-to-r from-tertiary to-[#004d8a] rounded-2xl p-12 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        Kom eens langs bij een repetitie
      </h2>
      <p className="text-xl mb-8 text-blue-100">
        Ben je nieuwsgierig geworden? Kom gerust een keer meezingen!
      </p>
      <button
        // onClick={() => onNavigate("kennismaken")}
        className="px-8 py-3 bg-white text-tertiary rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        Meer informatie
      </button>
    </div>
  );
};

export default Cta;
