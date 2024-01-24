import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Curreny Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiHo000000oaSD&surveyName=employee_survey&UUID=5fa3b8ac-1bec-464d-9d3d-de64c1764125"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://atportfolio-dev-ed.develop.my.site.com/note-taking-app"
        }
    ]
}