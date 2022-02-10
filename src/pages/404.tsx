import Image from "next/image"
import Link from "next/link"
import LovePicture from "../../public/android-chrome-512x512.png"

const Page404 = () => {
  return (
		<div className="flex flex-col min-h-screen bg-white lg:relative">
			<div className="flex flex-col flex-grow">
				<main className="flex flex-col flex-grow bg-white">
					<div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="flex-shrink-0 pt-10 sm:pt-16">
							<Link href="/">
								<a className="inline-flex">
									<span className="sr-only">Workflow</span>
									<Image
										quality={100}
										width="48"
										height="48"
										src={LovePicture}
										alt="Love"
									/>
								</a>
							</Link>
						</div>
						<div className="flex-shrink-0 py-16 my-auto sm:py-32">
							<p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">404 error</p>
							<h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
								Page not found
							</h1>
							<p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
							<div className="mt-6">
								<Link href="/">
									<a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
										Go back home<span aria-hidden="true"> &rarr;</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<div className="absolute inset-0 w-full h-full">
					<Image objectFit="cover" layout="fill" quality={100} src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" alt="Desert" />
				</div>
			</div>
		</div>
  )
}

export default Page404