function digitalDataManager(overrides) {
    var self = this;

    self.data = {};
    self.pageName = "na";
    self.channel = "na";
    self.isChannelMapped = false;
    self.channelIndex = 0;

    self.site = "main";
    self.brand = "gdc";

    self.emptyPageDefault = "home"; //typically the root
    self.overrides = overrides;

    //create our digital data object
    self.getDigitalData = function (location, ttMeta) {

        try {
            self._setOverrideValues();
            self._initializeDigitalData();
            self._parseLocation(location);
            self._setPageAndChannel();
            self._setAdobeCampaign(ttMeta);
        }
        catch (error) {
            console.error('Error loading digital data object');
        }

        return self.data;
    }

    //override object can be passed into the constructor to override static values
    self._setOverrideValues = function () {
        if (!self.overrides)
            return;

        if ("emptyPageDefault" in self.overrides) {
            self.emptyPageDefault = self.overrides.emptyPageDefault;
        }

        if ("brand" in self.overrides) {
            self.brand = self.overrides.brand;
        }

        if ("isChannelMapped" in self.overrides) {
            self.isChannelMapped = self.overrides.isChannelMapped;
        }

        if ("channelIndex" in self.overrides) {
            self.channelIndex = self.overrides.channelIndex;
        }

    }

    //if the ttMETA information is available then populate the campaign
    self._setAdobeCampaign = function (adobe) {
        if (!adobe)
            return;

        var campaign = adobe[0];

        if (!campaign)
            return;

        self.data.abTest.adobeTarget.campaignID = campaign.CampaignId;
        self.data.abTest.adobeTarget.campaignName = campaign.CampaignName;
        self.data.abTest.adobeTarget.recipeID = campaign.RecipeId;
        self.data.abTest.adobeTarget.recipeName = campaign.RecipeName;
        self.data.abTest.adobeTarget.offerID = campaign.OfferId;
        self.data.abTest.adobeTarget.offerName = campaign.OfferName;
        self.data.abTest.adobeTarget.mboxName = campaign.MboxName;
    }

    //use the extracted location data to populate page and channel of digital data
    self._setPageAndChannel = function () {
        self.data.page.pageInfo.channel = self.channel;
        self.data.page.pageInfo.pageName = self.brand + ":" + self.site + ":" + self.channel + ":" + self.pageName;
    }

    //this may need to be revisted if the behavior here grows
    self._mapChannel = function () {
        if (self.channel == null || self.channel == "undefined" || self.channel == "") {
            self.channel = "home";
        }
    }

    //parse the js location variable
    self._parseLocation = function (location) {

        if (!location || !location.pathname)
            return;

        var path = location.pathname.substring(1).toLowerCase();
        var parts = path.split('/');

        if (parts.length > 0) {
            self.pageName = parts.slice(-1)[0]; //last item            
            self.channel = parts[self.channelIndex];

       
        if (self.isChannelMapped) {
                self._mapChannel();
            }
      
        if (self.pageName == null || self.pageName == "undefined" || self.pageName == "")
            self.pageName = self.emptyPageDefault;
        }
    }

    //setup a default object 
    self._initializeDigitalData = function () {
        self.data = {
            page: {
                pageInfo: {
                    pageName: "", 
                    brand: self.brand,
                    site: self.site,
                    channel: "",
                    siteRendered: "desktop"
                }
            },
            user: [{
                profile: [{
                    profileInfo: {
                        custId: "not_applicable",
                        status: "logged_out"
                    }
                }]
            }],

            abTest: {
                adobeTarget: {
                    campaignID: "",
                    campaignName: "",
                    recipeID: "",
                    recipeName: "",
                    offerID: "",
                    offerName: "",
                    mboxName: ""
                }
            }
        };
    }
}

