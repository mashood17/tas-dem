export interface RestaurantConfig {
  name: string;
  tagline: string;
  location: string;
  address: string;
  primaryPhone: string;
  additionalPhones: string[];
  activeWhatsAppNumber: string; // E.164 without '+' for wa.me URL
  instagramUrl: string;
  reservationUrl: string;
  googleMapsDirectionsUrl: string;
  openingHours: string;
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: "TASTY RESTAURANT",
  tagline: "Meal Shared Is A Memory Made!",
  location: "BTM Layout, Maruthi Nagar, Bengaluru",
  address:
    "104/2, 20th Main, Maruthi Nagar Main Road, 1st Cross, BTM 1st Stage, Bengaluru, Karnataka 560029",
  primaryPhone: "+91 89045 16291",
  additionalPhones: ["+91 7711006608", "+91 7711006609"],
  activeWhatsAppNumber: "918904516291", // +91 89045 16291 official WhatsApp contact
  instagramUrl: "https://www.instagram.com/tasty_restaurant_btm/",
  reservationUrl:
    "https://www.swiggy.com/restaurants/tasty-restaurant-layout-btm-bangalore-465184/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Tasty+Restaurant+104/2+20th+Main+Maruthi+Nagar+Main+Road+1st+Cross+BTM+1st+Stage+Bengaluru+Karnataka+560029",
  openingHours: "11:30 AM – 1:30 AM Daily",
};
