import desktopCover from "../asset/bg-desktop-light.jpg";
import desktopCoverDark from "../asset/bg-desktop-dark.jpg";
import mobileCover from "../asset/bg-mobile-light.jpg";
import mobileCoverDark from "../asset/bg-mobile-dark.jpg";

export default function BackgroundCover({ dark }) {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={dark ? desktopCoverDark : desktopCover}
        alt="background"
        className="object-cover w-full h-auto hidden sm:block"
      />
      <img
        src={dark ? mobileCoverDark : mobileCover}
        alt="background"
        className="object-cover w-full h-auto block sm:hidden"
      />
    </div>
  );
}
