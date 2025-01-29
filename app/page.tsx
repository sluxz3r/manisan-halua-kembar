/* eslint-disable */
import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Pepaya",
      image: "/pepaya.png",
    },
    {
      name: "Cabai",
      image: "/cabai.png",
    },
    {
      name: "Asam Gelugur",
      image: "/gelugur.png",
    },
    {
      name: "Kolang-Kaling",
      image: "/kolangkaling.png",
    },
    {
      name: "Renda",
      image: "/renda.png",
    },
    {
      name: "Salak",
      image: "/salak.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col items-center">
      <header className="w-full max-w-4xl text-center py-6">
        <div className="flex justify-center items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Manisan Halua Kembar Logo"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="text-left">
            <h1 className="text-4xl font-bold text-yellow-400">
              Manisan Halua Kembar
            </h1>
            <p className="mt-2 text-lg">
              Menyajikan Halua & Manisan Berkualitas Tinggi dengan Rasa Otentik
            </p>
          </div>
        </div>
      </header>

      <section className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="w-full h-[400px] relative">
          <div className="absolute inset-0 bg-black w-full h-[400px] bg-opacity-30 rounded-xl z-30"></div>
          <Image
            src="/latar.webp"
            alt="Manisan Halua"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg z-20"
          />
        </div>

        <h2 className="text-2xl font-semibold text-yellow-400 mt-4">
          Tentang Kami
        </h2>
        <p className="mt-2 text-gray-300 indent-4">
          Manisan Halua Kembar adalah usaha yang berdedikasi untuk menghadirkan
          cita rasa autentik halua dan manisan khas yang tak terlupakan. Setiap
          produk kami dibuat dengan penuh cinta, menggunakan bahan-bahan pilihan
          yang diproses dengan metode tradisional yang telah diwariskan
          turun-temurun. Resep yang kami gunakan bukan hanya sekedar resep
          biasa, tetapi resep keluarga yang sudah ada sejak generasi sebelumnya,
          menjaga keaslian dan rasa yang kaya, serta memberikan pengalaman
          manisan yang sesungguhnya.
          <br />
          <p className="indent-4">
            Kami percaya bahwa rasa terbaik berasal dari perhatian pada setiap
            detail, dan itulah yang kami bawa dalam setiap produk Manisan Halua
            Kembar. Setiap gigitan adalah warisan rasa yang disempurnakan selama
            bertahun-tahun, memberikan kenikmatan dan kenangan yang tak
            terlupakan.
          </p>
        </p>
      </section>

      <section className="w-full max-w-4xl mt-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400">Produk Kami</h2>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-xl flex flex-col items-center"
            >
              <div className="relative w-full aspect-[1/1]">
                <div className="absolute inset-0 bg-black w-full h-full bg-opacity-30 rounded-xl z-30"></div>

                <Image
                  src={item.image}
                  alt={item.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-gray-200 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mt-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
          Keunggulan Kami: Kenikmatan yang Tak Tertandingi
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Di **Manisan Halua Kembar**, kami berkomitmen untuk memberikan yang
          terbaik kepada setiap pelanggan. Kami percaya bahwa kelezatan bukan
          hanya soal rasa, tetapi juga kualitas bahan dan cara penyajian.
          Berikut adalah beberapa keunggulan yang menjadikan produk kami
          istimewa:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-2">
          <li>
            <strong>Bahan Alami Tanpa Pengawet</strong>: Kami hanya menggunakan
            bahan-bahan alami yang segar dan berkualitas tinggi. Tanpa bahan
            pengawet, sehingga Anda bisa menikmati rasa yang lebih segar dan
            sehat.
          </li>
          <li>
            <strong>Proses Higienis dengan Standar Tinggi</strong>: Setiap
            produk kami diproses dengan cermat menggunakan standar kebersihan
            yang ketat, memastikan kualitas dan keamanannya dari mulai pemilihan
            bahan hingga produk jadi.
          </li>
          <li>
            <strong>Rasa Khas yang Otentik dan Lezat</strong>: Dengan resep
            tradisional yang telah diwariskan turun-temurun, setiap gigitan
            membawa Anda pada kenangan rasa yang autentik dan menggugah selera.
          </li>
          <li>
            <strong>Pilihan Varian yang Beragam</strong>: Kami memahami setiap
            selera, maka dari itu kami menawarkan berbagai varian manisan dan
            halua yang cocok untuk semua kalangan, baik untuk camilan ringan
            maupun sebagai hadiah istimewa.
          </li>
          <li>
            <strong>Dedikasi pada Kualitas dan Kepuasan Pelanggan</strong>:
            Setiap produk kami dihasilkan dengan penuh perhatian untuk
            memastikan Anda mendapatkan produk berkualitas terbaik dan pelayanan
            yang ramah.
          </li>
        </ul>
        <p className="text-lg text-gray-300 mt-4">
          Kami tidak hanya menjual manisan, kami menghadirkan pengalaman rasa
          yang membawa kebahagiaan dan kepuasan. Bergabunglah dengan kami dalam
          menikmati kelezatan yang tak terlupakan!
        </p>
      </section>

      <section className="w-full max-w-4xl mt-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Testimoni Pelanggan
        </h2>
        <p className="mt-2 text-gray-300 italic">
          "Manisan terbaik yang pernah saya coba! Rasanya sangat autentik dan
          manisnya pas."
          <span className="block text-sm text-yellow-300 mt-2">
            - Dwi **r**
          </span>
        </p>
        <p className="mt-4 text-gray-300 italic">
          "Produk berkualitas dengan harga terjangkau. Sangat recommended!"
          <span className="block text-sm text-yellow-300 mt-2">
            - Rina **t**
          </span>
        </p>
        <p className="mt-4 text-gray-300 italic">
          "Sangat puas dengan rasa dan kemasan produk! Pasti beli lagi."
          <span className="block text-sm text-yellow-300 mt-2">
            - Hendra **a**
          </span>
        </p>
        <p className="mt-4 text-gray-300 italic">
          "Paket manisan favorit keluarga. Anak-anak suka banget!"
          <span className="block text-sm text-yellow-300 mt-2">
            - Siti **l**
          </span>
        </p>
        <p className="mt-4 text-gray-300 italic">
          "Kualitas produk sangat terjaga, rasanya enak dan memuaskan."
          <span className="block text-sm text-yellow-300 mt-2">
            - Agus **r**
          </span>
        </p>
        <p className="mt-4 text-gray-300 italic">
          "Manisan Halua Kembar selalu jadi pilihan saya untuk oleh-oleh.
          Rasanya selalu konsisten!"
          <span className="block text-sm text-yellow-300 mt-2">
            - Fitria **n**
          </span>
        </p>
      </section>

      <section className="w-full max-w-4xl mt-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400">Hubungi Kami</h2>
        <p className="mt-2 text-gray-300">
          Untuk pemesanan atau informasi lebih lanjut, silakan hubungi kami di:
        </p>
        <p className="mt-2 font-semibold text-gray-100">
          Alamat: Jl HAH Hasan No 47 Kota Binjai Sumatera Utara, 20718
        </p>
        <p className="mt-2 font-semibold text-gray-100">
          WhatsApp: 0852-9647-7594
        </p>
        <p className="text-gray-100">Instagram: @haluakembarbinjai</p>
      </section>

      <div className="w-full h-24 bg-gray-900 relative overflow-hidden mt-6">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </div>

      <footer className="w-full max-w-4xl text-center py-6 text-gray-400">
        <p>&copy; 2025 Manisan Halua Kembar. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
