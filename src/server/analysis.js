
runAnalysis(apiRequest)

const runAnalysis = async (request) => {
    console.log("::: Running Sentiment Analysis ::: \nAPI Request = ", request);
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
        let amazingFeedback = {
            subjectivity: meaningCloudData.subjectivity,
            confidence: meaningCloudData.confidence,
            sentiment: meaningCloudData.sentiment
        }
        module.exports = amazingFeedback
    } catch (error) {
        console.log("error: ", error);
    }
};

