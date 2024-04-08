import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function FooterComponent() {
  return (
    <footer className=' bg-white' style={{ marginTop: '30px' }}>
      <section style={{ margin: '50px' }} className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <section className='footer-con' style={{ marginTop: '50px' }}>
          <div>
            <div className="text-teal-600">
              <img style={{ width: '100px' }} src="https://the-next.eliterature.org/img/global/next-icon.png" alt="logo" />
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              NEXT-ORA Shop is a popular e-commerce store that specializes in providing authentic Shoes products to
              customers all over the world.
            </p>
            <ul className="flex gap-5 mt-4">
              <li><BsFacebook size={24} /></li>
              <li><AiFillInstagram size={24} /></li>
              <li><BsTelegram size={24} /></li>
              <li><AiFillTwitterCircle size={24} /></li>
            </ul>
          </div>
          <div className=' detail-con'>
            <p className="font-medium text-gray-900">Category</p>
            <ul className="mt-6 text-sm">
              <li>Nike</li>
              <li>Adidas</li>
              <li>New Balance</li>
              <li>Converse</li>
            </ul>
          </div>
          <div className=' detail-con'>
            <p className="font-medium text-gray-900">Company</p>
            <ul className="mt-6  text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>

        


        <p className="mt-10 text-xs text-gray-500 flex justify-center">&copy; 2023. NEXT-ORA Shop. All rights reserved.</p>
      </section>
    </footer>
  );
}
