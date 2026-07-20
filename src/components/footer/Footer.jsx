import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#050816] px-6 py-16">

      {/* Main Footer */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          md:grid-cols-3
        "
      >

        {/* Brand */}
        <FooterBrand />

        {/* Quick Links */}
        <FooterLinks />

        {/* Social Links */}
        <FooterSocials />

      </div>

      {/* Bottom Footer */}
      <div
        className="
          mx-auto
          mt-14
          flex
          max-w-7xl
          flex-col
          gap-4
          border-t
          border-slate-800/60
          pt-7
          text-sm
          text-slate-600
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <p>
          © 2026 Bhawna Tomar. All rights reserved.
        </p>

        <p>
          Designed & Developed with{" "}
          <span className="text-cyan-400">♥</span>{" "}
          by Bhawna Tomar
        </p>

      </div>

    </footer>
  );
}

export default Footer;