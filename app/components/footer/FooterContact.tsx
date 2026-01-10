import { MapPin, Phone, Mail } from "lucide-react";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-champagne uppercase">Contact Us</h2>
      <p className="text-secondary text-sm">
        Feel free to get in touch with us
      </p>
      <ul className="flex flex-col gap-2 text-secondary text-sm">
        <li>
          <MapPin className="inline w-5 h-5 mr-2" />3 Residence Rd, Gbagada
          Lagos, Nigeria
        </li>
        <li>
          <Phone className="inline w-5 h-5 mr-2" />
          +234 706 935 6045
        </li>
        <li>
          <Mail className="inline w-5 h-5 mr-2" />
          hello@makartistry.com
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
