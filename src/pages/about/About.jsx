import s from './about.module.scss';
import './about.scss';

export function About({ data }) {
	
	
	return (
		<div className={s.about}>
			{
				data.map((item,index) =>
					<div key={item.id} className={'box' + index} >
						<div className={s.content}>
							<h2>{item.header}</h2>
							<p>{item.description}</p>
							<button className={s.btn}>{item.button}</button>
						</div>
						<img src={item.photo} alt={item.title} />
					</div>)
			}
		</div>
	)
}
