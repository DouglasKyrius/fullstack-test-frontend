import tw from 'twin.macro';
import { FooterBlack, FooterGreen } from '@/components/background-svg';

const FooterText = tw.p`
  text-white  
  font-semibold
  text-2xl
`;

export const Footer = () => (
  <div className="relative text-center">
    <div className="flex justify-center">
      <div className="absolute bottom-0">
        <FooterText>Need help?</FooterText>
        <div className="mt-5" />
        <FooterText>coopers@coopers.pro</FooterText>
        <div className="mt-3" />
        <p className="text-white">© 2021 Coopers. All rights reserved.</p>
        <div className="flex justify-center w-full mt-7">
          <FooterGreen />
        </div>
      </div>
    </div>
    <div className="-z-50 w-full">
      <FooterBlack />
    </div>
  </div>
);
