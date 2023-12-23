import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="bg-white  shadow  dark:bg-gray-800  bottom-0 w-full">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://scandiweb.com/terms-of-service"
                class="hover:underline me-4 md:me-6"
              >
                scandiweb test assignment
              </a>
            </li>
           
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
