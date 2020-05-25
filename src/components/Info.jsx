import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import Box from '@material-ui/core/Box';
import "../styles.css";



export default function Title() {

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} >
            <Box boxShadow={1} className="info-item">
                <h3>Disclaimer</h3>
                <p>This website and information it presents is not a replacement for any diagnostic procedures performed by a healthcare professional. The data provided may (and honestly, probably does) differ from the more precise measurements that can be attained in a clinical setting. The due date given is a guess. The displayed comparison between hand and fetus is also a best guess. But, in general, what is provided is probably more accurate than telling your mother-in-law her grandchild is now the size of some random fruit or vegetable that people rarely buy. I mean, what is a durian or a jicama anyway?</p>
            </Box>
        </Grid>
        <Grid item xs={12} >
            <Box boxShadow={1} className="info-item">
                <h3>Resources</h3>
                <p>Doublet PM, et al. 1997. Improved birth weight table for neonates developed from gestations dated by early ultrasonography. Journal of Ultrasound Medicine 16(4):241-9. https://www.ncbi.nlm.nih.gov/pubmed/9315150</p>
                <p>Hadlock FP, et al. 1992. Fetal crown rump length: Reevaluation of relation to menstrual age (5-18 weeks) with high resolution real-time US. Radiology 182(2):501-5. https://www.ncbi.nlm.nih.gov/pubmed/1732970</p>
                <p>Usher R, et al. 1969. Intrauterine growth of live-born Caucasian infants at sea level: Standards obtained from measurements in 7 dimensions of infants born between 25 and 44 weeks of gestation. Pediatrics 74(6):901-10. https://www.ncbi.nlm.nih.gov/pubmed/5781799</p>
                <p>Vintzileos AM, Campbell WA, Neckles S, Pike CL, Nochimson DJ.The ultrasound femur length as a predictor of fetal length.PMID: 6390277</p>
                <p> Hadlock FP, et al., Estimating fetal age:Computer-assisted analysis of multiple fetal growth parameters. Radiology 1984; 152:497-5011. PMID: 673982</p>

            </Box>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}
