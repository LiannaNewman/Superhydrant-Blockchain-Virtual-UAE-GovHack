(function () {

    var app = angular.module('superhydrantApp', []);


    // #region tweetController


    app.controller('tweetController', ['$scope', '$timeout', 'tweetService', ($scope, $timeout, tweetService) => {


        // #region From twitter

        tweetService.getFakeTweets().then((result) => {
            $scope.tweetCount = result.data.length;
            
            var locationData = [];
            for (var i = 0; i < result.data.length; i++) {
                
                if (result.data[i].geo != null) {
                    locationData.push({
                        latitude: result.data[i].geo.coordinates.latitude,
                        longitude: result.data[i].geo.coordinates.longitude,
                        url: result.data[i].url,
                        condition: result.data[i].url.indexOf('rusty') !== -1 ? 'Good' : 'Rusty'
                    });
                    //console.log('Geo found for ' + i + ' --> ', result.data[i].geo.coordinates);
                }
            }
            console.log('locationData: ', locationData.length);

            // let the map know that all tweets loaded.
            $timeout(() => { window.tweetsLoaded(locationData) }, 2000);

        });
        // #endregion

        

    }]);

    // #endregion


    // #region tweetService

    app.service('tweetService', ['$q', ($q) => {

        function getFakeTweets() {

            // #region Fake Data

            var fakeJson = {
    "data": [
	{
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -98.7569559
	        }
	    },
	    "url": "images/good1.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 37.3481191,
	            "longitude": -97.7369559
	        }
	    },
	    "url": "images/good2.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 35.3481191,
	            "longitude": -92.7569559
	        }
	    },
	    "url": "images/good3.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 31.3481191,
	            "longitude": -88.7569559
	        }
	    },
	    "url": "images/good4.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 28.3481191,
	            "longitude": -98.7569559
	        }
	    },
	    "url": "images/good5.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.3481191,
	            "longitude": -80.9569559
	        }
	    },
	    "url": "images/good6.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.1481191,
	            "longitude": -98.7569559
	        }
	    },
	    "url": "images/good7.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 39.3481191,
	            "longitude": -88.7569559
	        }
	    },
	    "url": "images/good8.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 40.3481191,
	            "longitude": -82.7569559
	        }
	    },
	    "url": "images/good9.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 41.3481191,
	            "longitude": -80.7569559
	        }
	    },
	    "url": "images/good10.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -80.7569559
	        }
	    },
	    "url": "images/good11.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 37.3481191,
	            "longitude": -106.7569559
	        }
	    },
	    "url": "images/good12.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -110.7569559
	        }
	    },
	    "url": "images/good13.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 44.3481191,
	            "longitude": -115.7569559
	        }
	    },
	    "url": "images/good14.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 46.3481191,
	            "longitude": -117.7569559
	        }
	    },
	    "url": "images/good15.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 47.3481191,
	            "longitude": -117.7569559
	        }
	    },
	    "url": "images/good16.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 41.3481191,
	            "longitude": -102.7569559
	        }
	    },
	    "url": "images/good17.jpg"
	},
	{
	    "geo": {
	        "coordinates": {
	            "latitude": 39.3481191,
	            "longitude": -107.7569559
	        }
	    },
	    "url": "images/rusty1.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -112.7569559
	        }
	    },
	    "url": "images/rusty2.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 41.3481191,
	            "longitude": -109.7569559
	        }
	    },
	    "url": "images/rusty3.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -117.7569559
	        }
	    },
	    "url": "images/rusty4.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -120.7569559
	        }
	    },
	    "url": "images/rusty5.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 40.3481191,
	            "longitude": -120.7569559
	        }
	    },
	    "url": "images/rusty6.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -98.7569559
	        }
	    },
	    "url": "images/rusty7.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 44.3481191,
	            "longitude": -99.7569559
	        }
	    },
	    "url": "images/rusty8.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 46.3481191,
	            "longitude": -100.7569559
	        }
	    },
	    "url": "images/rusty9.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 34.3481191,
	            "longitude": -106.7569559
	        }
	    },
	    "url": "images/rusty10.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 33.3481191,
	            "longitude": -103.7569559
	        }
	    },
	    "url": "images/rusty11.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.3481191,
	            "longitude": -102.7569559
	        }
	    },
	    "url": "images/rusty12.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.3481191,
	            "longitude": -100.7569559
	        }
	    },
	    "url": "images/rusty13.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.3481191,
	            "longitude": -110.7569559
	        }
	    },
	    "url": "images/rusty14.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 32.3481191,
	            "longitude": -111.7569559
	        }
	    },
	    "url": "images/rusty15.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -121.7569559
	        }
	    },
	    "url": "images/rusty16.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 43.3481191,
	            "longitude": -119.7569559
	        }
	    },
	    "url": "images/rusty17.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 39.3481191,
	            "longitude": -119.7569559
	        }
	    },
	    "url": "images/rusty18.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -116.7569559
	        }
	    },
	    "url": "images/rusty19.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 41.3481191,
	            "longitude": -104.7569559
	        }
	    },
	    "url": "images/rusty20.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -78.7569559
	        }
	    },
	    "url": "images/rusty21.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 38.3481191,
	            "longitude": -89.7569559
	        }
	    },
	    "url": "images/rusty22.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 37.3481191,
	            "longitude": -77.7569559
	        }
	    },
	    "url": "images/rusty23.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 37.3481191,
	            "longitude": -79.7569559
	        }
	    },
	    "url": "images/rusty24.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 37.9481191,
	            "longitude": -99.9569559
	        }
	    },
	    "url": "images/rusty25.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 34.3481191,
	            "longitude": -110.7569559
	        }
	    },
	    "url": "images/rusty26.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 42.3481191,
	            "longitude": -120.7569559
	        }
	    },
	    "url": "images/rusty27.jpg"
	}, {
	    "geo": {
	        "coordinates": {
	            "latitude": 43.3481191,
	            "longitude": -117.9569559
	        }
	    },
	    "url": "images/rusty28.jpg"
	}]


};

            // #endregion

            return $q.when(fakeJson);
        }


        return {
            getFakeTweets: getFakeTweets
        }


    }]);

    // #endregion

})();