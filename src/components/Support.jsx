import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

function Support() {
	return (
		<div name="support" className="w-full h-1/2 mt-24">
			<div className="w-full h-[700px] bg-gray-900/90 absolute">
				<img
					src={supportImg}
					alt="/"
					className="w-full h-full object-cover mix-blend-overlay blur-sm"
				/>
			</div>

			<div className="max-w-[1240px] mx-auto text-white relative">
				<h2 className="pt-8 text-slate-300 text-center text-3xl uppercase">
					Support
				</h2>
				<h3 className="text-5xl font-bold py-6 text-center">
					Finding the right team
				</h3>
				<p className="py-4 text-3xl text-slate-300 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi, amet recusandae? Repellendus aspernatur temporibus
					facilis quaerat ab quis magnam vitae aliquam sit ipsum totam
					maxime reiciendis quia explicabo laborum expedita, molestiae
					accusamus vero deserunt deleniti inventore in unde, quod
					facere!
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
				<div className="bg-white rounded-xl shadow-2xl">
					<div className="p-8">
						<PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
						<h3 className="font-bold text-2xl my-6">Sales</h3>
						<p className="text-gray-600 text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe provident vero ut temporibus blanditiis
							doloremque error exercitationem modi sit suscipit.
						</p>
					</div>
					<div className="bg-slate-100 pl-8 py-4">
						<a
							className="flex items-center text-indigo-600 hover:underline"
							href="#"
						>
							Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
						</a>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-2xl">
					<div className="p-8">
						<SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
						<h3 className="font-bold text-2xl my-6">
							Technical Support
						</h3>
						<p className="text-gray-600 text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe provident vero ut temporibus blanditiis
							doloremque error exercitationem modi sit suscipit.
						</p>
					</div>
					<div className="bg-slate-100 pl-8 py-4">
						<a
							className="flex items-center text-indigo-600 hover:underline"
							href="#"
						>
							Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
						</a>
					</div>
				</div>
				<div className="bg-white rounded-xl shadow-2xl">
					<div className="p-8">
						<ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
						<h3 className="font-bold text-2xl my-6">
							Media Inquiries
						</h3>
						<p className="text-gray-600 text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe provident vero ut temporibus blanditiis
							doloremque error exercitationem modi sit suscipit.
						</p>
					</div>
					<div className="bg-slate-100 pl-8 py-4">
						<a
							className="flex items-center text-indigo-600 hover:underline"
							href="#"
						>
							Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Support;
