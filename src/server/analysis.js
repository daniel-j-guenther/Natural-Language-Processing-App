runAnalysis(apiRequest);

const runAnalysis = async (apiPath) => {
    console.log("::: Running Sentiment Analysis :::");
    const res = await fetch(apiPath)
    try {
        let meaningCloudData = await res.json();
        console.log("::: Received Sentiment Analysis :::");
        return meaningCloudData;
    } catch (error) {
        console.log("error: ", error);
    }
};

let amazingFeedback = {
    subjectivity: meaningCloudData.subjectivity,
    confidence: meaningCloudData.confidence,
    sentiment: meaningCloudData.sentiment
}

module.exports = amazingFeedback