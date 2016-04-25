---
layout: research
title: Efficient statistical methods to compute CVA sensitivities 
subtitle: 
with: under the direction of Arnaud Tisseyre and Guillaume Hermet (BNP Paribas)
subject: Counterparty Credit Risk, Quantitative finance @ BNP Paribas 
---

<a href="{{ base.url }}/download/2014_saleille_internship.pdf" target="_blank">Download the full article</a>

> Credit Valuation Adjustement (CVA) measures the counterparty risk embedded in any financial derivative. The main difficulties linked to CVA are of computational order, since its computation relies on heavy Monte-Carlo simulation schemes. The specific issue I worked on was the optimization of the computation of CVA sensitivities. In this field, the standard method is finite difference, where first-order derivatives are estimated neglecting higher order effects. This method provides a biased but consistent estimate. However it is numerically intensive since the function of interest has to be evaluated in two separate points. I implemented several alternative methods (finite difference, likelihood ratio, Malliavin weights, pathwise estimator, Vibrato Monte-Carlo) and compared their precision and performance numerically using Python. My results have been presented to analysts and quants located in London, New-York, Paris, Hong-Kong and Tokyo.