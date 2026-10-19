async function get(url, { follow = true } = {}) {
  const res = await fetch(url, { redirect: follow ? "follow" : "manual" });
  return res;
}

const home = await get("http://localhost:3000/");
const html = await home.text();
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
const picker =
  html.includes("اختيار التصميم") ||
  html.includes("التصميم الأول") ||
  html.includes("التصميم الخامس") ||
  html.includes("المحفظة التنفيذية");
const executive =
  html.includes('data-theme="executive"') &&
  html.includes('id="experience"') &&
  html.includes("استعرض الخبرات المهنية") &&
  html.includes("/cv.pdf");
const portfolioTheme = html.includes('data-theme="portfolio"');

console.log("HOME", home.status, title);
console.log("pickerUI", picker);
console.log("executiveLanding", executive);
console.log("portfolioTheme", portfolioTheme);
console.log("name", html.includes("محمد جروع العزني"));

for (const path of ["/executive", "/portfolio"]) {
  const res = await get("http://localhost:3000" + path, { follow: false });
  console.log(
    path,
    "status",
    res.status,
    "location",
    res.headers.get("location"),
  );
}
