import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";

export default function AccordionComponent({selectedKeysSideBar}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  React.useEffect(() => {
    setSelectedKeys(selectedKeysSideBar);
  }, [selectedKeysSideBar]);
  // console.log(selectedKeysSideBar);
  return (
    <div className="w-full max-w-full">
      <Accordion
        variant="splitted"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem key="1" aria-label="Week 1" title="Week 1 ">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 1</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Day 0 </TableCell>
                                <TableCell >Getting Started by setting up Anaconda environment.</TableCell>
                                <TableCell><a href="https://docs.anaconda.com/free/anaconda/install/windows/">Installing Anaconda for windows</a></TableCell>
                                <TableCell><a href="https://docs.anaconda.com/free/anaconda/install/mac-os/">Installing Anaconda for mac</a></TableCell>
                                <TableCell><a href="https://docs.anaconda.com/free/anaconda/install/linux/">Installing Anaconda for linux</a></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 1</TableCell>
                                <TableCell>Hey there, excited to start learning?
First,  we will begin with learning the basics of Python.</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7">Beginner Tutorial for Python Programming.(videos 1-3)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7">Moving Ahead (videos 4 - 6)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7">Wrapping up on basics (videos 7 - 10)</a></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Gaining an overview of NumPy . You will be using them extensively in your Data Science journey.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=QUT1VHiLmmI&ab_channel=freeCodeCamp.org">Basics of Numpy (till 40 mins is sufficient)</a></TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/orhansertkaya/numpy-tutorial-for-beginners#Computation-on-NumPy-Arrays:-Universal-Functions">Numpy Notebook</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Gaining an overview of Pandas. You will be using them extensively in your Data Science journey.</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y">Intro to Pandas (videos 1 to 10)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y">Data Analysis with Pandas (videos 11 to 20)</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Continuing with Pandas, let's use it for data cleaning and transformations</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y">Diving into Pandas (videos 25 to 33)</a></TableCell>
                                <TableCell><a href="https://github.com/justmarkham/pandas-videos/blob/master/pandas.ipynb">Pandas Notebook</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Continuing with Pandas, let's use it for data cleaning and transformations</TableCell>
                                <TableCell><a href="https://www.kaggle.com/learn/pandas">Kaggle Micro-course on Pandas (only exercise) </a></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Week 2" title="Week 2">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 2</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="" >Day 1</a> </TableCell>
                                <TableCell>Data Visualization helps us in gaining insights from the data through visuals like graphs and maps. We would look into some common libraries which are Matplotlib, Seaborn, and Plotly.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=MbKrSmoMads">Intro to Matplotlib</a></TableCell>
                                <TableCell><a href="https://www.geeksforgeeks.org/matplotlib-tutorial/">GFG article on Matplotlib (optional but helpful)</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Data Visualization helps us in gaining insights from the data through visuals like graphs and maps. We would look into some common libraries which are Matplotlib, Seaborn, and Plotly.
</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PLBfyvFO_aKGRaJmdo501Hu_wXwgmjbR50">Intro to Seaborn</a></TableCell>
                                <TableCell><a href="https://www.geeksforgeeks.org/python-seaborn-tutorial/">GFG Tutorial on Seaborn</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Data Visualization helps us in gaining insights from the data through visuals like graphs and maps. We would look into some common libraries which are Matplotlib, Seaborn, and Plotly.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=GGL6U0k8WYA&ab_channel=DerekBanas">Intro to Plotly (required till 1 hr)</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Dealing with large tables can at times become overwhelming. Thus we may want to summarize the content of tables using Descriptive Statistics.</TableCell>
                                <TableCell><a href="https://towardsdatascience.com/data-types-in-statistics-347e152e8bee">Data Types in Statistics.</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL0KQuRyPJoe6KjlUM6iNYgt8d0DwI-IGR">Measurement of Central Tendency. (videos 3 - 7)</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Continuing with Statistics</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PL0KQuRyPJoe6KjlUM6iNYgt8d0DwI-IGR">Normal Distribution (videos 18 - 20)</a></TableCell>
                                <TableCell><a href="https://towardsdatascience.com/q-q-plots-explained-5aa8495426c0">Quantile Plots</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Week 3" title="Week 3">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 3</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>Hey, excited for Week 3? Often the data we deal with can have various issues like missing values, categorical values and outliers. Today we will learn about basic techniques to deal with such issues!</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18&ab_channel=KrishNaik">Outlier Analysis</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=P_iMSYQnqac&ab_channel=KrishNaik">Handling Missing Values</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Continue</TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/debarshichanda/handling-missing-values/notebook">Practical Handling Missing Values</a></TableCell>
                                <TableCell><a href="https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15">Exploratory Data Analysis</a></TableCell>
                                <TableCell><a href="https://medium.com/analytics-vidhya/how-to-handle-categorical-features-ab65c3cf498e#:~:text=1)%20Using%20the%20categorical%20variable,category%20with%20a%20probability%20ratio.">Handling Categorical Variables </a></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Today we aren't going to be too technical, let us just motivate ourselves about Machine Learning, get to know its application, and have a rudimentary understanding of what Machine Learning is.
</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=_1QtMPuYIVw&t=582s&ab_channel=TensorFlow">What is ML , common problems solved by ML</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=xtOg44r6dsE&ab_channel=edureka%21">Supervised and unsupervised learning</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Starting at the grassroots level, we study in depth the simplest ML model Linear Regression, alongwith Cost function and Gradient Descent. Don't worry if it sounds too hard, trust us it isn't.</TableCell>
                                <TableCell><a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cs229.stanford.edu/summer2019/cs229-linalg.pdf">(optional)[Linear Algebra, Refresher required for those who don't have mathematical base]</a></TableCell>
                                <TableCell><a href="https://towardsdatascience.com/everything-you-need-to-know-about-linear-regression-b791e8f4bd7a">Linear Regression Blog</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Linear regression</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=dLc-lfEEYss&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=9&ab_channel=DeepLearningAI">Linear Regression with One Variable
(Videos 9 - 14)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=WtlvKq_zxPI&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=16&ab_channel=DeepLearningAI">Linear Regression with One Variable
(Videos 15 - 20)</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Week 4" title="Week 4">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 4</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>Let us spice things up a bit, we study Linear regression again but this time with Multiple features.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=WtlvKq_zxPI&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=21&ab_channel=DeepLearningAI">Linear Regression with Multiple Variables (Videos 21 - 24) </a></TableCell>
                                <TableCell><a href="https://inria.github.io/scikit-learn-mooc/python_scripts/linear_regression_without_sklearn.html">Linear Regression without Scikit-learn</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Continuing with Linear Regression</TableCell>
                                <TableCell><a href="https://inria.github.io/scikit-learn-mooc/python_scripts/linear_regression_in_sklearn.html">Linear Regression with Scikit-learn</a></TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/navinpatwari09/linear-regression-with-1-feature?scriptVersionId=131306785">Linear Regression with 1 variable from scratch</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Today we will be introduced to our first ever classification model, Logistic Regression. Let's get to it.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=p-ltr1C7u2o&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=32&ab_channel=DeepLearningAI">Logistic Regression
Videos 31 - 36</a></TableCell>
                                <TableCell><a href="https://towardsdatascience.com/introduction-to-logistic-regression-66248243c148">Logistic Regression Blog</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Logistic Regression </TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=71iXeuKFcQM&t=5s&ab_channel=MichaelGalarnyk">Logistic Regression with Scikit-learn</a></TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/arush207/basic-implementation-of-logistic-regression">Logistic Regression from scratch </a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Since we have covered 2 basic ML models, let us take a break and learn about Overfitting, Underfitting and the Bias-Variance Tradeoff. These can help in telling you the complexity of your model - how well your model has used your data. This will be followed by Regularization.  </TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=EuBBz3bI-aA&ab_channel=StatQuestwithJoshStarmer">Bias-Variance Video</a></TableCell>
                                <TableCell><a href="https://medium.com/@itbodhi/bias-and-variance-trade-off-542b57ac7ff4">Blog</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=8upNQi-40Q8&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI&index=37&ab_channel=DeepLearningAI">Overfitting and Regularisation (37 - 41)</a></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Week 5" title="Week 5">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 5</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>Continue</TableCell>
                                <TableCell><a href="https://towardsdatascience.com/intuitions-on-l1-and-l2-regularisation-235f2db4c261">L1 L2 Regularization</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=VqKq78PVO9g&ab_channel=codebasics">Lasso and Ridge Regression</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Today we will give you an introduction to Feature Transforations and how these are used for different types of data</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=3gfhbXt9TcQ&ab_channel=KrishNaik">All Feature Transformation</a></TableCell>
                                <TableCell><a href="https://www.analyticsvidhya.com/blog/2020/07/types-of-feature-transformation-and-scaling/">Scaling methods</a></TableCell>
                                <TableCell><a href="https://pbpython.com/categorical-encoding.html">Categorical Encoding</a></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Today, we'll take a closer look at what the AUC-ROC Score is and various other Evaluation Metrics to evaluate our machine leaning algorithms</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=4jRBRDbJemM&ab_channel=StatQuestwithJoshStarmer">AUC - ROC curve</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=Kdsp6soqA7o&ab_channel=StatQuestwithJoshStarmer">Confusion Matrix</a></TableCell>
                                <TableCell><a href="https://medium.com/ml-cheat-sheet/machine-learning-evaluation-metrics-b89b8832e275">Evaluation Metrics</a></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Today, we look into Naive and Gaussian Naive Baye's Algorithms. Naïve Bayes algorithm is a supervised learning algorithm, which is based on Bayes theorem and used for solving classification problems.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=jS1CKhALUBQ&ab_channel=KrishNaik">Multinomial Naive Bias Classifier</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=H3EjCKtlVog&ab_channel=StatQuestwithJoshStarmer">Gaussian Naive Bias</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=nHIUYwN-5rM&ab_channel=codebasics">Naive Bias implementation using Scikit-learn</a></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Let's have a look at Support Vector Machine (SVM)</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=efR1C6CvhmE&ab_channel=StatQuestwithJoshStarmer">SVM 1</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=Toet3EiSFcM&ab_channel=StatQuestwithJoshStarmer">SVM 2</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=Qc5IyLW_hns&ab_channel=StatQuestwithJoshStarmer">SVM 3</a><br></br><br></br>
                                <a href="https://www.analyticsvidhya.com/blog/2017/09/understaing-support-vector-machine-example-code/">SVM Blog with code implementation</a></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="6" aria-label="Week 6" title="Week 6">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 6</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>A model's performance can be greatly increased by tuning its hyperparameters and at the same time it is also important to look for how accurate our model is. For this, we can use Grid search methods and Cross-Validation.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=fSytzGwwBVw&ab_channel=StatQuestwithJoshStarmer">Cross Validation</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=gJo0uNL-5Qw">Code Implementation</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=DTcfH5W6o08&ab_channel=Siddhardhan">What is hyperparameter tuning ?</a></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Technical Lead</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=aijB8qbEOQ4&ab_channel=Siddhardhan">Implementing Random Search method.</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=_L39rN6gz7Y&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=46&ab_channel=StatQuestwithJoshStarmer">DecisionTrees (videos 46 -49)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=J4Wdy0Wc_xQ&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=52&ab_channel=StatQuestwithJoshStarmer">Random Forest (videos 52 - 53)</a></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Senior Developer</TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/faressayah/decision-trees-random-forest-for-beginners">Decision Trees Notebook</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=ok2s1vV9XW0&ab_channel=codebasics">Random Forest implementation</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Let's explore what boosting is and some of its variations</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=3CC4N4z3GJc&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=59&ab_channel=StatQuestwithJoshStarmer">Gradient Boosting (videos 59 - 61)</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=OtD8wVaFm6E&ab_channel=StatQuestwithJoshStarmer">XGBoost</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=8b1JEDvenQU&ab_channel=StatQuestwithJoshStarmer">XGBoost continued</a></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Community Manager</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=KXOTSkPL2X4&ab_channel=StatQuestwithJoshStarmer">Catboost 1</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=3Bg2XRFOTzg&ab_channel=StatQuestwithJoshStarmer">Catboost 2</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="7" aria-label="Week 7" title="Week 7">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 7</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>Let's look at some more variations of boosting algorithms and how they can be used for specialized tasks.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=LsK-xG1cLYA&ab_channel=StatQuestwithJoshStarmer">Adaboost</a></TableCell>
                                <TableCell><a href="https://www.kaggle.com/learn/intermediate-machine-learning">Kaggle Intermediate microcourse</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Technical Lead</TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/prashant111/lightgbm-classifier-in-python#2.-LightGBM-intuition-">LightGBM</a></TableCell>
                                <TableCell><a href="https://www.kaggle.com/code/prashant111/adaboost-classifier-tutorial/notebook">AdaBoost implementation</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Today we learn about KNN. K-Nearest Neighbour is one of the simplest Machine Learning algorithms based on Supervised Learning technique.</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=HVXime0nQeI&ab_channel=StatQuestwithJoshStarmer">KNN video</a></TableCell>
                                <TableCell><a href="https://towardsdatascience.com/k-nearest-neighbors-knn-explained-cbc31849a7e3">KNN Blog</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Continued</TableCell>
                                <TableCell><a href="">KNN Implementation</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Enjoy!!</TableCell>
                                <TableCell><a href="">Complete your Backlog Till now</a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="8" aria-label="Week 8" title="Week 8">
        <div>
                    <Table aria-label="Example static collection table" removeWrapper >
                        
                        <TableHeader  >
                            <TableColumn className="text-black" >Week 8</TableColumn>
                            <TableColumn className="text-black">Learnings</TableColumn>
                            <TableColumn className="text-black">Quest 1</TableColumn>
                            <TableColumn className="text-black">Quest 2</TableColumn>
                            <TableColumn className="text-black">Quest 3</TableColumn>
                        </TableHeader>
                      
                        <TableBody>
                            <TableRow key="1">
                                <TableCell><a href="https://www.youtube.com/watch?v=rzR_cKnkD18" >Day 1</a> </TableCell>
                                <TableCell>Welcome to the final week of Learning, as next week is Capstone Project This week we will discuss Neural Networks and Unsupervised Learning. Today Let us go into the foundations of Neural Networks</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=CS4cs9xVecg&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=1&ab_channel=DeepLearningAI">Neural Networks
(1 - 23) </a></TableCell>
                                <TableCell><a href=""></a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Day 2</TableCell>
                                <TableCell>Today we will first get an intuitive understanding of how Neural Networks work and then implement a small Neural Network from scratch using Python</TableCell>
                                <TableCell><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">Understanding Neural Networks</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=ubgwaNhU5v8&ab_channel=WhenMathsMeetCoding">Neural Networks with Python</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Day 3</TableCell>
                                <TableCell>Today we will learn how to use the Keras library to implement Neural Networks. Keras is a popular Deep learning library which makes using Neural Networks very simple for us</TableCell>
                                <TableCell><a href="https://www.pluralsight.com/browse">Regression with Keras</a></TableCell>
                                <TableCell><a href="https://www.pluralsight.com/browse">Classification with Keras</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Day 4</TableCell>
                                <TableCell>Let us have a look at unsupervised learning, its uses and types. We will also look at one particular algorithm the K-means method</TableCell>
                                <TableCell><a href="https://towardsdatascience.com/unsupervised-learning-and-data-clustering-eeecb78b422a">Unsupervised Learning</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=4b5d3muPQmA&feature=youtu.be&ab_channel=StatQuestwithJoshStarmer">K-means Clustering</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Day 5</TableCell>
                                <TableCell>Today we will discuss PCA and its application through scikit-learn</TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=k_S5fnKjO-4&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=24&ab_channel=DeepLearningAI">Tools and techniques for Deep Learning.
24 - 43</a></TableCell>
                                <TableCell><a href="https://www.youtube.com/watch?v=QdBy02ExhGI&feature=youtu.be&ab_channel=KrishNaik">PCA using sklearn</a></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>



                </div>
        </AccordionItem>
        <AccordionItem key="9" aria-label="Assessment" title="Assessment">
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">Links</TableColumn>
                <TableColumn className="text-black">Deadline</TableColumn>
                <TableColumn className="text-black">Instructions</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Day 4</TableCell>
                  <TableCell>Community Manager</TableCell>
                  <TableCell>Vacation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem
          key="10"
          aria-label="Additional Materials"
          title="Additional material"
        >
          <div>
            <Table
              aria-label="Example static collection table"
              removeWrapper
              // classNames={classNames}
            >
              <TableHeader>
                <TableColumn className="text-black">
                  Extra Materials
                </TableColumn>
                <TableColumn className="text-black">Links</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <a href="https://www.youtube.com/watch?v=rzR_cKnkD18">
                      Day 1
                    </a>{" "}
                  </TableCell>
                  <TableCell>CEO</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Day 2</TableCell>
                  <TableCell>Technical Lead</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Day 3</TableCell>
                  <TableCell>Senior Developer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-12 text-sm  text-center mt-4 flex flex-col justify-center bg-gray-300 rounded-xl align-middle">copyright @ Consultancy,Finance and Analytics ,IIT Indore</div>
      <div className="w-full h-12 text-md text-center mt-4 border-rounded-2"></div>

    </div>
  );
}
