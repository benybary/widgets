import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		document.body.addEventListener(
			"click",
			(event) => {
                if (ref.current && ref.current.contains(event.target)){
                    return;
                }

				setOpen(false);
			},
			{ capture: true }
		);
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div style={{color: `${option.value}`}}
				key={option.value}
				className="item"
				onClick={() => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div>
			
			<div ref={ref} className="ui form">
				<div className="field">
					<label className="label">{label}</label>
					<div
						onClick={() => setOpen(!open)}
						className={`ui selection dropdown ${open ? "visible active" : ""}`}
					>
						<i className="dropdown icon"></i>
						<div className="text" style={{color: `${selected.value}`}} >{selected.label} </div>
						<div className={`menu ${open ? "visible transition" : ""}`}>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
