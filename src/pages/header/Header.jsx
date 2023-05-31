import { useState, useEffect } from 'react';
import './header.scss';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';

import { Menu1 } from './menu1/Menu1';
import { Menu2 } from './menu2/Menu2';
import { Menu3 } from './menu3/Menu3';

export default function Header({ logo }) {

	const [menu1, setMenu1] = useState({});
	const [menu2, setMenu2] = useState({});
	const [menu3, setMenu3] = useState({});

	useEffect(() => {
		fetch('http://localhost:3000/menu')
			.then(response => response.json())
			.then(function (data) {
				setMenu1(data[0]);
				setMenu2(data[1]);
				setMenu3(data[2]);
				return data;
			});
	}, [])

	const [selected, setSelected] = useState(0);
	const handleClick = (divNum) => () => {
		setSelected(divNum);
	};


	window.addEventListener('scroll', function(){
		const container = document.querySelector('.container');
		container.classList.toggle('sticky', window.scrollY > 700);
	});
 
	return (
		<div className='container'>
			<div className='pages'>

				<GiHamburgerMenu className='menu-bar' />

				<img src={logo.photo} alt={logo.id} />

				<nav className='navbar'>
					<div className={selected === 1 ? 'h1 active' : 'h1'} onMouseEnter={handleClick(1)} >
						{logo.h1}
						<div className={selected === 1 ? 'menu1 active' : 'menu1'} onMouseLeave={handleClick(0)}>
							<Menu1 menu1={menu1} /></div>
					</div>
					<div className={selected === 2 ? 'h2 active' : 'h2'} onMouseEnter={handleClick(2)} >
						{logo.h2}
						<div className={selected === 2 ? 'menu2 active' : 'menu2'} onMouseLeave={handleClick(0)}>
							<Menu2 menu2={menu2} /></div>
					</div>
					<div className='h3'>{logo.h3}</div>
					<div className={selected === 3 ? 'h4 active' : 'h4'} onMouseEnter={handleClick(3)} >
						{logo.h4}
						<div className={selected === 3 ? 'menu3 active' : 'menu3'} onMouseLeave={handleClick(0)}>
							<Menu3 menu3={menu3} /></div>
					</div>
					<div className='h5'>{logo.h5}</div>
				</nav>


			</div>


			<div className='contacts'>
				<div className='phone-icon'>
					<div><span><BsFillTelephoneFill /></span> {logo.phone}</div>
				</div>
				<div className='social-networks'>
					<div><FaFacebookF /></div>
					<div><FaTwitter /></div>
					<div><FaPinterestP /></div>
				</div>
			</div>
		</div>
	)
}
