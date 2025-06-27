import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer d-flex">
        <div className="about">
          <h4 className="prin">Printivo</h4>
          <p>About Us</p>
          <p>Contact</p>
          <p>Track Order</p>
          <p>Printivo Promise</p>
          <p>Printivo Blog</p>
          <p>Career</p>
        </div>

        <div className="about">
          <h4 className="prin">Help and Information</h4>
          <p>Paper Quality</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Font Licenses</p>
          <p>Shipping and Delivery</p>
        </div>

        <div className="about">
          <h4 className="prin">Make Money</h4>
          <p>Refer a friend & earn N1,000</p>
          <p>Become a Reseller</p>
          <p>Sell your Designs</p>
          <p>Merch Store</p>
        </div>

        <div>
          <h4 className="prin">Follow Us</h4>
          <div className="d-flex gap-4">
            {/* Optional: Replace with Font Awesome */}
            <img
              src="data:image/svg+xml,%3Csvg width='13' height='22' viewBox='0 0 13 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
              alt="Facebook"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='24' height='21' viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23 2.00029C22.0424 2.67577 20.9821 3.1924 19.86 3.53029C19.2577 2.8378 18.4573 2.34698 17.567 2.12422C16.6767 1.90145 15.7395 1.95749 14.8821 2.28474C14.0247 2.612 13.2884 3.19469 12.773 3.95401C12.2575 4.71332 11.9877 5.61263 12 6.53029V7.53029C10.2426 7.57586 8.50127 7.1861 6.93101 6.39574C5.36074 5.60537 4.01032 4.43893 3 3.00029C3 3.00029 -1 12.0003 8 16.0003C5.94053 17.3983 3.48716 18.0992 1 18.0003C10 23.0003 21 18.0003 21 6.50029C20.9991 6.22174 20.9723 5.94388 20.92 5.67029C21.9406 4.66378 22.6608 3.393 23 2.00029V2.00029Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
              alt=""
            />
            <img
              src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 9H2V21H6V9Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
              alt="LinkedIn"
            />
            <img
              src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5 6.5H17.51' stroke='white' strokeWidth='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
              alt="Instagram"
            />
          </div>

          <h4 className="prin mt-4">Accepted Payments</h4>
          <img
            className="mt-2"
            width="200"
            src="https://printivo.s3-us-west-2.amazonaws.com/files/temp/payment.png"
            alt="Payment Methods"
          />

          <h4 className="prin mt-4">Delivery</h4>
          <img
            src="https://printivo.s3-us-west-2.amazonaws.com/files/temp/shipping.png"
            alt="Shipping Partners"
          />
        </div>
      </footer>

      <div className="div-5">
        <p className="text-center pt-2">
          Copyright © 2023 Printivo. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
