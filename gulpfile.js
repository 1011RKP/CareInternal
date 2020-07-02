'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

const merge = require('webpack-merge');
const webpack = require('webpack');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.setConfig({
    additionalConfiguration: function (config) {
        let isDevelopment = process.env.NODE_ENV === 'DEVELOPMENT';
        let isQA = process.env.NODE_ENV === 'QA';
        let isProduction = process.env.NODE_ENV === 'PRODUCTION';
        let defineOptions;
        if (isDevelopment) {
            console.log('***********    Applying DEVELOPMENT settings to webpack *********************');
            defineOptions = {
                '_WebServiceHost_': JSON.stringify('https://appservicesdev.wawa.com'),//appservicesdev.wawa.com
                '_AzureAppId_': JSON.stringify('5a872086-9490-4c1f-b50f-c99dcc75a211'),
                //'_SiteAssets_': JSON.stringify('https://wawadev.sharepoint.com/sites/intranet/SiteAssets/WawaApps/'),
                '_InternalCareSubmission_': JSON.stringify('Ratnakumar.Paleru@wawa.com'),
                //'_BigSixValuesSiteUrl_': JSON.stringify('https://wawadev.sharepoint.com/sites/Intranet')
            }
        } else if (isQA) {
            // specify QA keys here
            console.log('***********    Applying QA settings to webpack *********************');
            defineOptions = {
                '_WebServiceHost_': JSON.stringify('https://appservicesqa.wawa.com'),
                '_AzureAppId_': JSON.stringify('30b49757-425a-4139-8be8-78c15725cf92'),
                //'_SiteAssets_': JSON.stringify('https://wawaqa.sharepoint.com/sites/mywawa-Intranet/SiteAssets/WawaApps/'),
                '_InternalCareSubmission_': JSON.stringify(''),
                //'_BigSixValuesSiteUrl_': JSON.stringify('https://wawaqa.sharepoint.com/sites/MyWawa-BigSixValues')
            }
        }
        else if (isProduction) {
            console.log('***********    Applying PRODUCTION settings to webpack *********************');
            // specify production keys here
            defineOptions = {
                '_WebServiceHost_': JSON.stringify('https://appservices.wawa.com'),
                '_AzureAppId_': JSON.stringify('f8e87cab-a848-4acf-baf4-0a9b96326ae9'),
                //'_SiteAssets_': JSON.stringify('https://wawa365.sharepoint.com/sites/MyWawa-Home/SiteAssets/WawaApps/'),
                '_InternalCareSubmission_': JSON.stringify(''),
                //'_BigSixValuesSiteUrl_': JSON.stringify('https://wawa365.sharepoint.com/sites/MyWawa-BigSixValues')
            }
        }

        return merge(config, {
            plugins: [
                new webpack.DefinePlugin(defineOptions)
            ]
        });
    }
});

build.initialize(gulp);
