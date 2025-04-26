const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AI Solutions</h2>
          <p>Transforming businesses with AI technology</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>AI Marketing</li>
            <li>AI Campaigns</li>
            <li>AI Consulting</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>info@aisolutions.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 AI Street, Tech City</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-800 mt-10 pt-6 text-center text-sm">
        © 2024 AI Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
