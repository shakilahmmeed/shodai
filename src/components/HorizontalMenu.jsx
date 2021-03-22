import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ENABLE_LOGIN_MODE } from "../state/misc";

export default function HorizontalMenu() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const enableLoginMode = () => {
		dispatch({ type: ENABLE_LOGIN_MODE });
	};

	return (
		<>
			<nav>
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
							<div className="flex items-center text-gray-400">
								<span className="material-icons mt-1">search</span>
								<input
									className="w-60 focus:border-gray-300 bg-white h-10 pl-2 pr-10 rounded-lg text-sm focus:outline-none"
									type="search"
									name="search"
									placeholder="Search for items or brands"
								/>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<Link
								to="/cart"
								className="mr-3 mt-1 text-gray-400 focus:outline-none relative"
							>
								<span className="material-icons">shopping_cart</span>
								{cart.length ? (
									<span className="bg-green-600 px-1 text-xs text-white rounded-3xl absolute count">
										{cart.length}
									</span>
								) : null}
							</Link>
							<div className="ml-3 relative">
								<div>
									{true ? (
										<button
											className="py-1.5 px-5 bg-yellow-200 rounded font-semibold focus:outline-none"
											onClick={enableLoginMode}
										>
											Login
										</button>
									) : (
										<button
											className="flex items-center text-sm text-gray-500 p-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
											id="user-menu"
											aria-haspopup="true"
										>
											<img
												className="h-8 w-8 rounded-full"
												src="https://res.cloudinary.com/shakilahmmeed/image/upload/v1608722093/shakilahmed_vhgnib.jpg"
												alt=""
											/>
											<h3 className="font-medium ml-2">Shakil Ahmed</h3>
											<span className="material-icons">
												keyboard_arrow_down
											</span>
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<style jsx>{`
				nav {
					border-bottom: 1px solid rgba(0, 0, 0, 0.09);
					position: fixed;
					width: calc(100% - 230px);
					top: 0;
					overflow: hidden;
					background: white;
					z-index: 999;
				}

				.count {
					top: -5px;
					right: -4px;
				}
			`}</style>
		</>
	);
}
