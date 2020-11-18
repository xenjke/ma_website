import daytimeWallpaper from "./assets/wallpapers/MA_daytime__eberhard-grossgasteiger-iMnezp9R_dc-unsplash.jpg";
import daytimeWallpaper2 from "./assets/wallpapers/MA_daytime__eberhard-grossgasteiger-v5qZ8VnPamg-unsplash.jpg";
import daytimeSnowWallpaper from "./assets/wallpapers/MA_daytime_snow__eberhard-grossgasteiger-QyZHOQ-i24E-unsplash.jpg";
import eveningClearWallpaper from "./assets/wallpapers/MA_evening_clear__eberhard-grossgasteiger-v5qZ8VnPamg-unsplash.jpg";
import nightWallpaper from "./assets/wallpapers/MA_night__eberhard-grossgasteiger-ofxFTUWoHNY-unsplash.jpg";
import sunriseWallpaper from "./assets/wallpapers/MA_sunrise__eberhard-grossgasteiger-YJsDlw9yHWs-unsplash.jpg";
import sunsetWallpaper from "./assets/wallpapers/MA_sunset__eberhard-grossgasteiger-YJsDlw9yHWs-unsplash.jpg";

enum DayPart {
    sunrise = 'sunrise',
    daytime = 'daytime',
    sunset = 'sunset',
    night = 'night'
}

const wallpapers = {
    daytime: [daytimeWallpaper, daytimeWallpaper2],
    daytime_snow: [daytimeSnowWallpaper],
    evening_clear: [eveningClearWallpaper],
    night: [nightWallpaper],
    sunrise: [sunriseWallpaper],
    sunset: [sunsetWallpaper],
};

function timeMappedWallpaper(): string {
    const part = partOfTheDay();
    console.debug("Time of day:", part);
    return wallpapers[part][0];
}

function partOfTheDay(date = new Date()): DayPart {
    const currentHours = date.getHours();

    // 6AM - 8AM - sunrise
    // 8AM - 10AM - morning
    // 10AM - 5PM - daytime
    // 5PM - 9PM - evening
    // 9PM - 11PM - sunset
    // 11PM - 6AM - night

    if (currentHours >= 23 || currentHours < 6) { return DayPart.night }
    if (currentHours >= 6 && currentHours < 10) { return DayPart.sunrise }
    if (currentHours >= 10 && currentHours < 17) { return DayPart.daytime }
    if (currentHours >= 17 && currentHours < 23) { return DayPart.sunset }

    // default to daytime
    return DayPart.daytime
}

export { timeMappedWallpaper, partOfTheDay, DayPart };