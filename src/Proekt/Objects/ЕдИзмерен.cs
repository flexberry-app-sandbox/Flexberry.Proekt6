﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ед измерен.
    /// </summary>
    // *** Start programmer edit section *** (ЕдИзмерен CustomAttributes)

    // *** End programmer edit section *** (ЕдИзмерен CustomAttributes)
    [AutoAltered()]
    [Caption("Единицы измерения")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЕдИзмеренE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "ПолноеИмя as \'Полное имя\'"})]
    [View("ЕдИзмеренL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "ПолноеИмя as \'Полное имя\'"})]
    public class ЕдИзмерен : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fПолноеИмя;
        
        private int fКод;
        
        // *** Start programmer edit section *** (ЕдИзмерен CustomMembers)

        // *** End programmer edit section *** (ЕдИзмерен CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзмерен.Код CustomAttributes)

        // *** End programmer edit section *** (ЕдИзмерен.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзмерен.Код Get start)

                // *** End programmer edit section *** (ЕдИзмерен.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (ЕдИзмерен.Код Get end)

                // *** End programmer edit section *** (ЕдИзмерен.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзмерен.Код Set start)

                // *** End programmer edit section *** (ЕдИзмерен.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (ЕдИзмерен.Код Set end)

                // *** End programmer edit section *** (ЕдИзмерен.Код Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзмерен.Наименование CustomAttributes)

        // *** End programmer edit section *** (ЕдИзмерен.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзмерен.Наименование Get start)

                // *** End programmer edit section *** (ЕдИзмерен.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ЕдИзмерен.Наименование Get end)

                // *** End programmer edit section *** (ЕдИзмерен.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзмерен.Наименование Set start)

                // *** End programmer edit section *** (ЕдИзмерен.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ЕдИзмерен.Наименование Set end)

                // *** End programmer edit section *** (ЕдИзмерен.Наименование Set end)
            }
        }
        
        /// <summary>
        /// ПолноеИмя.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзмерен.ПолноеИмя CustomAttributes)

        // *** End programmer edit section *** (ЕдИзмерен.ПолноеИмя CustomAttributes)
        [StrLen(255)]
        public virtual string ПолноеИмя
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзмерен.ПолноеИмя Get start)

                // *** End programmer edit section *** (ЕдИзмерен.ПолноеИмя Get start)
                string result = this.fПолноеИмя;
                // *** Start programmer edit section *** (ЕдИзмерен.ПолноеИмя Get end)

                // *** End programmer edit section *** (ЕдИзмерен.ПолноеИмя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзмерен.ПолноеИмя Set start)

                // *** End programmer edit section *** (ЕдИзмерен.ПолноеИмя Set start)
                this.fПолноеИмя = value;
                // *** Start programmer edit section *** (ЕдИзмерен.ПолноеИмя Set end)

                // *** End programmer edit section *** (ЕдИзмерен.ПолноеИмя Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЕдИзмеренE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмеренE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмеренE", typeof(IIS.Proekt.ЕдИзмерен));
                }
            }
            
            /// <summary>
            /// "ЕдИзмеренL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмеренL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмеренL", typeof(IIS.Proekt.ЕдИзмерен));
                }
            }
        }
    }
}
