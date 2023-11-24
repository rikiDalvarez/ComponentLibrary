import React from 'react'
import logo from "/iceLogo.png"
import cabin from "/cabin.png"

function Logo() {
	return (
		<div>
			<a href="https://github.com/rikiDalvarez" target="_blank">
				<img src={cabin} className="logo" alt="Vite logo" />
			</a>
		</div>
	)
}

export default Logo