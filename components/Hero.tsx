export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl leading-tight font-bold [text-shadow:0_0_8px_white,0_0_16px_white,0_0_24px_white,0_0_32px_white] md:text-6xl">
        企業の成長を、
        <br />
        テクノロジーで加速する。
      </h1>
      <p className="mt-6 text-base font-medium [text-shadow:0_0_6px_white,0_0_12px_white,0_0_18px_white,0_0_24px_white] md:text-lg">
        私たちは、業務課の解決から未来の値まで、
        <br />
        お客様に寄り添い、最適なソリューションを提供します。
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-blue-800 bg-blue-800 px-6 py-3 text-base font-semibold text-white hover:bg-blue-900"
        >
          資料ダウンロード
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-blue-800 bg-white px-6 py-3 text-base font-semibold text-blue-800 hover:bg-blue-50"
        >
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
