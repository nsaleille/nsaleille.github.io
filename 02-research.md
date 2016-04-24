---
layout: page
title: Research
---

![placeholder](/public/img/climbing.jpg "Large example image")

some text and [here is possible to download the file in PDF][pdf-cv]

[pdf-cv]:{{ base.url }}/download/cv_nsaleille.pdf

<h2>Forecasting the French GDP : essay on statistical models to forecast macroeconomic variables</h2>
<h3>Master's thesis @ Paris School of Economics </h3>
<h4>under the direction of Stephane Gregoir (INSEE) </h4>

<p class="message">
In this thesis, we explore several short-term forecasting methods to predict the quarterly French GDP growth rate. We consider various forecasting horizons ranging from 1 to 8 month before official figure releases, and present various specifications to adress structural change and model uncertainty. We compare the performances of the most interesting models in a pseudo real-time forecasting exercise, based on a dataset containing 51 predictors.
</p>

##Quantile regression for panel data : a discussion of Koenker's (2004) estimator 
###with Louise Paul-Delvaux and Jeremy L'hour (ENSAE) 
####Semi and Non-Parametric Econometrics @ ENSAE 

<p class="message">
	We review the theoretical foundations and the most important properties of the quantile fixed-effect estimator suggested by Koenker (2004) to handle panel data. This estimator was specifically designed to take into account the panel structure of datasets when the econometrician wants to measure heterogenous effects of the covariates using quantile regression. We apply it on US wage data, and finds that it achieves a good performance in terms of variance reduction without introducing too much bias. However, we underline two weaknesses, related to its asymptotic properties and to the tuning of the penaly parameter.
</p>


##EMVS: the EM approach to Bayesian Variable Selection 
###with Jeremy L'hour (ENSAE) 
####Bayesian Statistics @ ENSAE 

<p>
	The Expectation-Maximisation applied to Variable Selection algorithm (EMVS) is a nice Bayesian selection tool. Its main feature is to lower considerably the computationnal power required to estimate posterior distributions in the feature space via MCMC. The EMVS is based on the continuous spike-and-slab normal mixture model and on a closed form expression of the EM algorithm. Variable selection is achieved through two important assumptions on the spike distribution, namely continuity and a positive variance parameter that introduces sparsity in the selection process. Once posterior modes have been discovered, model evaluation is carried out in a second step using a point mass spike distribution.
	
</p>


##Counterparty Credit Risk : Efficient statistical methods to compute CVA sensitivities 
###under the direction of Arnaud Tisseyre and Guillaume Hermet (BNP Paribas) 
####Quantitative finance @ BNP Paribas 

<p>
	Credit Valuation Adjustement (CVA) measures the counterparty risk embedded in any financial derivative. The main difficulties linked to CVA are of computational order, since its computation relies on heavy Monte-Carlo simulation schemes. The specific issue I worked on was the optimization of the computation of CVA sensitivities. In this field, the standard method is finite difference, where first-order derivatives are estimated neglecting higher order effects. This method provides a biased but consistent estimate. However it is numerically intensive since the function of interest has to be evaluated in two separate points. I implemented several alternative methods (finite difference, likelihood ratio, Malliavin weights, pathwise estimator, Vibrato Monte-Carlo) and compared their precision and performance numerically using Python. My results have been presented to analysts and quants located in London, New-York, Paris, Hong-Kong and Tokyo.
	
</p>

##High-dimensional panel data using the Lasso 
###with Jeremy L'hour (ENSAE) 
####Advanced Econometrics @ Paris School of Economics 

<p>
	Methods to deal with high-dimensional problems are of interest in micro-econometrics mostly as a way to perform model selection, whether it is in a context of a non-parametric model estimated by sieve approximation, selection of control variables or instruments. We reviewed the particular case of fixed effect panel data models. These models do not conform to a straightforward application of the regular Lasso since the assumption of approximate sparsity in the individual-specific heterogeneity appears unrealistic and that temporal correlation must be taken into account especially when a Within transformation of the model is considered. A convincing estimator called Cluster-Lasso has been proposed by Belloni et al. (2014): it has desirable theoretical properties based on assumptions that are usual in the high-dimensional literature and is also computationally efficient. In this report, we discuss its properties.
	
</p>

