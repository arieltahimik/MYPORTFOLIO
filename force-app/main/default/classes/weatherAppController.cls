public with sharing class weatherAppController {

   @AuraEnabled 
   public static string getWeatherDetails(String input){
   //  String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + getKey();
    String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=imperial' + getKey();
    String response = getResponse(url);
    return response;
   }
   public static String getResponse(String strUrl){
    Http h  = new Http();
    HttpRequest req = new HttpRequest();
    HttpResponse res = new HttpResponse();
    req.setMethod('GET');
    req.setEndpoint(strUrl);
    req.setTimeout(20000);
    res = h.send(req);
    String responseBody = res.getBody();
    return responseBody;
   }
   public static String getKey(){
    String key = '653e6566bd107af15256dae60889cba4'; // '55cdfffd9a497e0ceb696883c45f26e3'; // System.Label.WeatherApiKey
    String output = '&appid=' + key;
    return output;
   }
}