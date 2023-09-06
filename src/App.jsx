import React from 'react';       
import Header from './components/Header';
import News from './components/News';
import FooteFu from './components/Footer';

// Главная страница

function App()
{
    return (
        <>
            <Header />
            <News />
            <FooteFu />
        </>
    )
    
}




























// import Header from 'react-header-responsive';
// import Link from 'react-header-responsive';
// import logo from './rhr-logo.png';

// function App() {
//   const pages = [
//     {
//       name: 'About',
//       link: '/about',
//     },
//     {
//       name: 'Products',
//       children: [
//         {
//           name: 'Product-1',
//           link: '/product1',
//         },
//         {
//           name: 'Product-2',
//           link: '/product2',
//         },
//         {
//           name: 'Product-3',
//           link: '/product3',
//         },
//       ],
//     },
//     {
//       name: 'Pricing',
//       link: '/pricing',
//     },
//   ];

//   const Access = () => {
//     return (
//       <div>
//         <button>Sign Up</button>
//         <button>Sign In</button>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Header
//         home={<img src={logo} alt="RHR logo" />}
//         pages={pages}
//         anchor={(link, name, className) => (
//           <Link href={link} className={className}>
//             {name}
//           </Link>
//         )}
//         access={<Access />}
//         overlap
//       />
//     </>
//   );
// }

export default App;