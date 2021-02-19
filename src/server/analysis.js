
// how to access the data? 
runAnalysis(res)
   

const runAnalysis = async (request) => {
    const res = await fetch(request)
    try {
        let meaningCloudData = await res.json();
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
