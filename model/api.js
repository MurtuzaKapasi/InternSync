import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [similarity, setSimilarity] = useState(null);
    const [internInputs, setInternInputs] = useState([]);
    const [recruiterInputs, setRecruiterInputs] = useState([]);

    const calculateSimilarity = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate-similarity', {
                intern_inputs: internInputs,
                recruiter_inputs: recruiterInputs
            });
            setSimilarity(response.data.similarity);
        } catch (error) {
            console.error('Error calculating similarity:', error);
        }
    };

    return (
        <div>
            {/* Your UI elements for input (e.g., checkboxes) */}
            <button onClick={calculateSimilarity}>Calculate Similarity</button>
            {similarity && <p>Similarity: {similarity}%</p>}
        </div>
    );
};

export default YourComponent;
