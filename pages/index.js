import Head from "next/head"
import Image from "next/image"
import Modal from "./Modal"
import SearchInput from "../src/components/SearchInput/SearchInput"
import { useState, useEffect } from "react"
import axios from "axios"

const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}
export async function getStaticProps() {
  const res = await fetcher(
    "http://34.77.87.8:8080/https://elsan.void.fr/fr/jsonapi/node/elsan_praticien"
  );
  console.log(res)
  return {
    props: {
      data: res,
    },
  };
};

export default function Home({ data }) {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  function handleClick(urlpa) {

    setShow(true);
    setUrl(urlpa);



  }





  const showListing = () => {



    return (
      data.data.slice(1).map((item, index) => {
        let urlrdv = item.attributes.field_elsan_rdv?.uri;
        return (
          <div key={item.id} className="grid grid-cols-[100px_2fr_1fr] text-white border-0 hover:bg-slate-600	mt-4 p-2		">
            <div className="h-70 text-center mt-3">
              <Image src="/praticien_default.gif" alt="logo" width={70} height={70} className="rounded-full" />
            </div>
            <div className="text-center lg:text-left lg:ml-16"><h2>{item.attributes.title}</h2>
              <p>{item.attributes.field_elsan_profession}</p>
              <p>Tel {item.attributes.field_vactory_telephone}</p>

            </div>
            <div className="flex justify-center items-center">
              {urlrdv ? <button src={urlrdv} onClick={() => handleClick(urlrdv)} type="button" className="text-white h-12 px-1 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm   mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Rendez-vous</button>
                : ""}




            </div>
          </div>

        );
      })

    )
  }


  function hideSingleStorie() {
    setShow(false);


  }
  function showSingleStorie() {
    if (url !== undefined && show === true) {



      return <Modal url={url} hideSingleStorie={hideSingleStorie} />
    }

  }
  return (
    <div >
      <Head>
        <title>Void</title>
        <meta name="description" content="Vous cherchez un spécialiste à France ? Prenez rendez-vous avec un spécialiste dans une de nos nombreuses cliniques privées ELSAN." />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.elsan.care/sites/default/files/favicons/favicon-32x32.png" />
      </Head>
      <header className=" hidden lg:flex justify-between bg-slate-900 p-4 w-full ">

        <div className="main__logo flex items-center">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <div className="search__bar flex items-center ">
          <SearchInput variant="Role" />
          <span className="text-white mx-5">Et / Ou</span>
          <SearchInput variant="Location" />
        </div>
        <div className="search__button flex items-center mt-1">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Rechercher</button>

        </div>
      </header>
      <main className="bg-slate-900">
        <section>
          <div className="flex ml-6 text-white">
            Fil d"Ariane / Accueil / Annuaire / Specialistes / France
          </div>
          <div className="text-yellow-400 text-3xl text-center mt-5 	">
            <h1 className="mb-4">Prendre RDV avec un(e) spécialiste à proximité de France</h1>
            <h2 className="text-white text-lg mb-4">Trouver un spécialiste au sein des cliniques ELSAN</h2>
          </div>
        </section>
        <section className="lg:mx-[20%]">
          <div className="flex  text-white">
            <div className="bg-yellow-400 px-6 py-3 rounded">Specialites</div>
            <div className="bg-gray-800 px-6 py-3 rounded">Etablissement</div>
          </div>
          <div className=" shadow-lg shadow-slate-300">

            {showListing()}

          </div>
        </section>

        {showSingleStorie()}

      </main>
    </div>
  )
}
