import React from "react";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaTwitch,
} from "react-icons/fa";

function Footer() {
	return (
		<div className="w-full mt-24 bg-slate-900 text-gray-300 px-2">
			<div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
				<div>
					<h6 className="font-bold uppercase pt-2">Solutions</h6>
					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analtics</li>
						<li className="py-1">Data</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Cloud</li>
					</ul>
				</div>
				<div>
					<h6 className="font-bold uppercase pt-2">Support</h6>
					<ul>
						<li className="py-1">Pricing</li>
						<li className="py-1">Documentation</li>
						<li className="py-1">Guides</li>
						<li className="py-1">API Stastus</li>
					</ul>
				</div>
				<div>
					<h6 className="font-bold uppercase pt-2">Company</h6>
					<ul>
						<li className="py-1">About</li>
						<li className="py-1">Blog</li>
						<li className="py-1">Jobs</li>
						<li className="py-1">Mission Statement</li>
						<li className="py-1">Partners</li>
					</ul>
				</div>
				<div>
					<h6 className="font-bold uppercase pt-2">Legal</h6>
					<ul>
						<li className="py-1">Claims</li>
						<li className="py-1">Privacy</li>
						<li className="py-1">Terms</li>
						<li className="py-1">Policies</li>
						<li className="py-1">Conditions</li>
					</ul>
				</div>
				<div className="col-span-2 pt-8 md:pt-2">
					<p className="font-bold uppercase">
						Subscribe to our newsletter
					</p>
					<p className="py-4">
						The latest news, articles and resources, sent to your
						inbox weekly.
					</p>
					<form className="flex flex-col sm:flex-flow">
						<input
							className="w-full p-2 mr-4 rounded-md mb-4"
							type="email"
							placeholder="Enter email..."
						/>
						<button className="py-2 mb-4 w-full text-xl bg-slate-800 border-slate-800 hover:text-white">
							Subscribe!
						</button>
					</form>
				</div>
			</div>
			<div className="flex max-w-[1240px] m-auto justify-between flex-row text-center text-gray-500 px-2 py4">
				<div className="flex justify-between sm:max-w-[300px] pt-4 text-2xl mb-2">
					<FaFacebook className="mr-4" />
					<FaInstagram className="mr-4" />
					<FaTwitter className="mr-4" />
					<FaTwitch className="mr-4" />
					<FaGithub className="mr-4" />
				</div>
				<p className="text-l mt-3">
					2022 Workflow, LLC. All rights reserved
				</p>
			</div>
		</div>
	);
}

export default Footer;
