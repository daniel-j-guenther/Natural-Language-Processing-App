function runAnalysis(apiCall) {
    console.log("::: Running Sentiment Analysis ::: \nAPI Call = ", apiCall);
    module.exports = amazingFeedback
}

const runAnalysis = async (request) => {  
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
        let amazingFeedback = {
            subjectivity: meaningCloudData.subjectivity,
            confidence: meaningCloudData.confidence,
            sentiment: meaningCloudData.sentiment
        }
        return amazingFeedback
    } catch (error) {
        console.log("error: ", error);
    }
};

export { runAnalysis }
