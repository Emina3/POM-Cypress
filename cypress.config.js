const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true, // Değer true olursa, eski html dosyasını siler ve yenisini oluşturur. False olursa index001.html şeklinde diğer dosyaları oluşturur.
    charts: true, // Testlerin pass ve fail durumlarıyla ilgili rapora bir grafik ekler
    reportPageTitle: 'ToolShop Project Report', // Rapor başlığının değiştirilmesi için kullanılır
    reportFilename: "[name]_[status]_[datetime]_report", // Rapor dosyasını isimlendirmek için kullanılır
    timestamp: "shortDate", // Dosya ismindeki tarih alanının düzenlenmesinde kullanılır. shortDate veya longDate seçenekleri kullanılabilir.
    embeddedScreenshots: true, // Resim dosyasının html dosyasına gömülerek eklenmesini sağlar.
    inlineAssets: true, // assets klasörünün html dosyasına gömülerek eklenmesini sağlar.
    saveAllAttempts: false, // Fail olan testlerde eğer test tekrarı yapıyorsak, sadece son teste ait ekran görüntüsünü rapora ekler.
    ignoreVideos: false, // true seçeneği ile videolari gormezden gelir, rapora eklemez. 
    videoOnFailOnly: false // true seçeneği ile kullanıldığında, sadece fail olan testler için rapora video eklenir.
  },
  screenshotOnRunFailure: true, // Test fail olduğu durumda ekran dörüntüsü alır (npx cypress run komutu ile test çalıştırıldığında)
  trashAssetsBeforeRuns: true, // Test tekrar çalıştırıldığında önceki testten kalan resim ve videoları siler
  video: true, // Test npx cypress run komutu ile çalıştırıldığında video çeker
  retries: {
    runMode: 0, // npx cypress run komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    openMode: 0, // npx cypress open komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
  },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/#/",
    env: {
      register: "auth/register",
      login: "auth/login",
      dashboard: "admin/dashboard"
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});