import backgroundDaunKelapa from "../img/backgrounddaun.svg";
import backgroundLamming from "../img/LAMMINGatas.svg";
import badik from "../img/badikk.svg";
import fotoPengantin from "../img/fotopengantin.svg";
import undanganlogo from "../img/undanganss.svg";
import logoAdat from "../img/logoadat.svg";
import lammingbawah from "../img/lammingbawah.svg";

export default function Cover() {
  return (
    <div
      className="wrapped w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundDaunKelapa})`,
      }}
    >
      <div
        className="w-full h-full sm:bg-[50%,0%] xl:bg-[30%,0%] bg-[50%,0%]  "
        style={{
          backgroundImage: `url(${backgroundLamming})`,
          backgroundRepeat: "repeat-x",
        }}
      >
        {/* isi  */}

        <div className="w-full h-full">
          <div className="sm:h-[15%] xl:h-[20%] h-[10%] w-full"></div>
          <div className="w-full h-[49%] xl:h-[50%] sm:h-[53%] xl:flex xl:w-[100%] ">
            {/* code untuk the wedding of dan nama */}

            <div className="w-full xl:w-[100%] xl:justify-end xl xl:pr-10 xl:pt-7">
              <div className="w-full flex justify-center xl:justify-end xl:w-full    ">
                <img src={badik} alt="" className="sm:w-[50px]" />
              </div>
              <div className=" ">
                <div className="flex justify-center xl:justify-end">
                  <h1 className="text-[14px] text-[#376D41] font-sarlotte mt-3 sm:text-[28px]  ">
                    THE WEDDING OF
                  </h1>
                </div>
                <div className="font-carmitta sm:text-[60px] sm:-mt-2 text-[35px] text-[#376D41] w-full flex justify-center xl:justify-end ">
                  <h1>
                    fadly <span className="sm:text-[39px] text-[30px] ">&</span>{" "}
                    ainun{" "}
                  </h1>
                </div>
                <div className="xl:flex justify-end hidden ">
                  <button
                    type="button"
                    className="mt-2 text-[#E8E4E4]  bg-gradient-to-r from-[#386E42] to-[#3D4827] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[18px] px-10 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <img src={undanganlogo} alt="" className="mr-2 w-[20px]" />
                    Buka Undangan
                  </button>
                </div>
              </div>
            </div>

            {/* penutup */}

            {/* code untuk gambar pengantin */}

            <div className="fotoPengantin sm:w-full sm:justify-center sm:flex xl:w-[100%]  xl:justify-start">
              <div className="">
                <img
                  src={fotoPengantin}
                  alt=""
                  className="sm:w-[600px] sm:mr-4 xl:-mt-3 -mt-12  sm:-mt-12 xl:-ml-24"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:h-[32%] xl:h-[30%] overflow-hidden h-[41%] text-[#376D41] flex justify-center">
            <div className="">
              <div className="">
                <div className="tanggal text-[16px] font-sarlotte mt-3 flex justify-center">
                  <p>32 Dec 2024</p>
                </div>
                <div className="flex justify-center text-[12px]">
                  <p>Kpd Bpk/Ibu/Saudara/i</p>
                </div>
                <div className="flex justify-center text-[28px] font-myflora">
                  <p>Meidiana Tahir </p>
                </div>
                <div className="font-sarlotte text-[12px] flex justify-center text-center -mt-2">
                  <p className="w-[80%]">
                    Dengan Menjunjung Rasa Hormat, Kami mengundang Anda Untuk
                    Hadir di Acara Pernikahan Kami
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="mt-2 text-[#E8E4E4]  bg-gradient-to-r from-[#386E42] to-[#3D4827] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px] px-5 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <img
                    src={undanganlogo}
                    alt=""
                    className="mr-2 sm:w-[20px] w-[12px]"
                  />
                  Buka Undangan
                </button>
              </div>
              <div className="relative">
                <div
                  className="absolute top-0 w-full flex justify-center "
                  style={{
                    backgroundImage: `url(${lammingbawah})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img className="opacity-80" src={logoAdat} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* isi */}
      </div>
    </div>
  );
}
