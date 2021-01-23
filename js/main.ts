
document.getElementById("vorwärts").addEventListener("click", bildGroß);
document.getElementById("rückwärts").addEventListener("click", bildGroß);
document.getElementById("vorwärts").addEventListener("click", test);
document.getElementById("rückwärts").addEventListener("click", test);

interface Zeichnungen {
    name: string;
    nameZwei: string;
    id: string;
    array: string[];
}

let bild1: Zeichnungen = {
    name: "./styles/fotos/kleopatra.jpg",
    nameZwei: "69 v.Chr.",
    id: "Kleopatra",
    array: ["Kelopatra wurde 69 v. Chr. in Alexandria geboren. Sie war das dritte von fünf Kindern des ägyptisch-hellenistischen Pharaos Ptolemaios XII. (um 110 – 51 v. Chr.), einem König der makedonisch-griechischen Ptolomäer-Dynastie. Diese wurde als Folge der Eroberung Ägyptens durch Alexander dem Großen 332 v. Chr. seit 323 v. Chr. in Ägypten eingesetzt.",
        "Kleopatras Mutter ist den Historikern nicht bekannt, es wird allerdings angenommen das es eine adelige Dame Ägyptens war. Kurz vor seinem Tod ernannte der Vater Kleopatra zu seiner Mitregentin (52 v. Chr.). Zusammen mit ihrem 10jährigen Bruder besteigt sie, nach dem Tod des Vaters, den Thron 51 v. Chr.",
        "Zu diesem Zeitpunkt war Agypten ein Satellietenstaat Roms. Nach Ägyptischer Tradition ging sie mit ihrem Bruder eine Geschwisterehe ein. Ihre Regierungszeit war von Machtkämpfen bestimmt, was schlussendlich dazu führte, dass die Berater ihres Bruders, sie aus der Regentschaft drängten und sie schlussendlich sogar das Land verlassen musste 49.v.Chr. Von Palästina aus führte sie mit Hilfe von Söldner gegen die Berater ihres Bruders Krieg., gleichzeitig herrschte in Ägypten ein Bürgerkrieg.",
        "Julius Cäsar konnte diesen Krieg für sich entscheiden und wurde 48. v. Chr. zum Militärherrscher Ägyptens. Im Konflikt zwischen Kleopatra und Ptolemaios XIII. riss er die Schiedsgerichtsbarkeit an sich. Kleopatra landete heimlich in Alexandria und gelangte in einem Sack versteckt in den Palast von Caesar. Caesar zeigte sich von der listenreichen Kleopatra beeindruckt und begann eine Affäre mit ihr.",
        "Die Berater des Königs fürchteten um ihre Macht und riefen einen fünf Monate andauernden Alexandrischen Krieg aus (48/47 v. Chr.). Cäsar gewann den Konflikt. Bei diesem soll die berüchtigte Bibliothek von Alexandria in Flammen aufgegangen sein. Kleopatra wurde daraufhin zur Herrscherin über Ägypten durch Roms Gnaden. Ihr Bruder war als formeller Mitherrscher an ihrer Seite, hatte jedoch nicht viel Verantwortung. Cäsar stützt ihre Macht in Ägypten und Kleopatras Einfluss auf ihn wächst stetig.",
        "44 v. Chr. fällt Caesar einem Attentat zum Opfer. Kleopatra hat damit ihren wichtigsten Rückhalt in Rom, wo sofort blutige Kämpfe um die Caesar-Nachfolge ausbrachen, verloren. In diesen Konflikten kam es zu einer Auseinandersetung zwischen zwei Nachlassverwaltern Cäsars, Octavian und Marcus Antonius. Der Machtkampf um die Herrschaft Roms dauerte zehn Jahre an und auch Ägypten war betroffen. Kleopatra, die nach dem Tod ihres Bruders zur ägyptischen Alleinherrscherin aufgestiegen war, schlug sich in diesem Konflikt auf die Seite von Antonius.",
        "41 v. Chr. wurde sie dessen Geliebte. Zusammen bekommen sie drei Kinder. -	Ägypten konnte in den tobenden Konflikten seine Grenzen erweitern und Kleopatra gewann an Ansehen und Macht. Auch ihre Eigendarstellung wurde immer gewagter und gipfelte daran, dass sie sich als Verkörperung der Göttin Isis darstellte. Doch der Gegensatz von Octavian, der das westliche Imperium beherrschte und Antonius, der im Osten herrschte, brach in einem finalen Machtkampf aus, den Octavian für sich entscheiden konnte.",
        "In einer  Seeschlacht von Actium besiegte Octavian 31 v. Chr. die verbündeten Flotten von Kleopatra und Antonius. Antonius und Kleopatra leisteten noch ein Jahr Wiederstand, doch war der Krieg 30 v. Chr. Endgültig verloren. Antonius brachte sich selbst um und starb in Kleopatras Armen. Es heißt, dass Kleopatra seinen Tod provoziert haben soll um sich selbst eine bessere Verhandlungsbasis mit Octavian zu ermöglichen. Dieser verhaftete sie trotzdem.",
        "Die zu diesem Zeitpunkt 39-jährige Kleopatra, nahm sich am 12. August (nach heutiger Zeitrechnung) des Jahres 30 v. Chr. in Alexandria das Leben. Man munkelt, dass sie sich mit Schlangengift getötet haben soll, dies ist jedoch nicht bewiesen und strittig. -	Ihr Sohn Caesarion wurde später von Oktavian getötet, da dieser als Rivale hätte angesehen werden können. Sie wurde in ihrem Mausoleum in Alexandria neben Antonius bestattet.",
        "Mit Kleopatras Tod wurde Ägypten endgültig zu einer Provinz Roms, mit Sonderstatus. Kleopatra ging mit ihrem Einfluss auf den mächtigsten Herrscher Roms und ihren Einfluss auf Ägypten in die Geschichte ein.", "Zitiert aus der Quelle:https://www.was-war-wann.de/personen/kleopatra-VII.html"]
};

let bild2: Zeichnungen = {
    name: "./styles/fotos/theophanu.jpg",
    nameZwei: "950",
    id: "Theopanu",
    array: ["Sie wurde nach dem damals verwendeten julianischen Kalender um 960 im Oströmischen Reich geboren. Theophanu war eine römisch-deutsche Königin (985–991) und Kaiserin des Heiligen Römischen Reiches. Zunächst an der Seite ihres Mannes Otto II. (Hochzeit 972), später regierte sie für ihren noch minderjährigen Sohn und Thronfolger Otto III. Sie starb am 15. Juni 991 mit 31 Jahren in Nimwegen im Heiligen Römischen Reich (heute Niederlande).", 
    "972 heiratet Theophanu in Rom Otto II., den Sohn Kaiser Ottos des Großen und wird selbst zur Kaiserin gesalbt. Kaum stirbt der alte Kaiser ein Jahr später in Memleben, entbrennt der Kampf um die Macht.", 
    "An der Seite ihres Mannes kämpft Theophanu mutig gegen die Intrigen ihrer Schwiegermutter Adelheid und deren Verbündeten Herzog Heinrich den Zänker. Chronisten berichten, sie hätte ihren Mann im Griff gehabt. Nach einer verlorenen Schlacht gegen die Araber, dem plötzlichen Tod ihres Gemahls im Jahre 983 und einem zeitgleich ausbrechenden Aufstand der Slawen, steht das Reich kurz vor der Katastrophe.", 
    "Theophanus Karriere scheint beendet, als Heinrich der Zänker auch noch ihren Sohn, den rechtmäßigen König entführt und selbst nach der Krone strebt. Doch die energische Byzantinerin schmiedet eine Koalition gegen die Aufständischen und bezwingt ihren Widersacher. Als Theophanu sieben Jahre später mit gerade 31 Jahren stirbt, hinterlässt sie ihrem Sohn ein starkes Reich in der Mitte Europas.",
    "Quelle: https://www.mdr.de/zeitreise/weitere-epochen/mittelalter/artikel124940.html"]
};

let bild3: Zeichnungen = {
    name: "./styles/fotos/Elisabeth_1.jpg",
    nameZwei: "1533",
    id: "Elisabeth die I.",
    array: ["Queen Elisabeth wurde am 7.September 1533 in Greenwich, London in England geboren. Sie war eine Königin von England. ",
        "Queen Elizabeth Tudor war die mächtigste Herrscherin im 16. Jahrhundert und prägte diese Zeit, welche später als das Elisabethanische Zeitalter (1558-1603) in die Geschichte eingehen sollte. Sie gründete die Anglikanische Kirche und siegte 1588 über die spanische Armada, was das Fundament für Englands zukünftige Seemacht war. Sie verstarb am 24.März 1603 mit 69 Jahren in Richmond, London.",
        "Sie verbrachte ihre Jugend auf Hunsdon & Hatfield Manors. Sie lernte dort fünf Sprachen fließend zu sprechen, erhielt Griechisch-Stunden sowie Italienisch-Unterricht. Sie lernte außerdem das Reiten, Tanzen und Bogenschießen. In der Thronfolge stand sie lediglich auf dem dritten Rang hinter ihren Halbgeschwistern Mary und Edward.",
        "Als Queen Mary zum Katholizismus zurückkehrte richteten sich die Augen der Opposition auf Elisabeth. Obwohl diese zu keiner Zeit selber tätig wurde, warf man sie 1554 für acht Wochen in den Tower von London. Da es jedoch keine Beweise für ihr Mitwirken gab, wurde sie mangels Beweise wieder entlassen und gelangte in die Obhut Sir Henry Bedingfields. Erst im April 1555 kehrte sie an den Hof zurück.",
        "Nach dem Tode von Queen Mary (1558) wurde Elisabeth Königin. Der 15.01.1559 war das Datum der Krönung. Mary Stuart rief sich ebenfalls als Königin aus, da sie sich bei den Katholiken als rechtmäßige Nachfolgerin von Henry dem VIII sah, scheiterte damit allerdings. Nach einem Komplott gegen Elisabeth, wurde Mary Stuart von der Regierung hingerichtet, auch wenn Elisabeth diese Entscheidung nicht selbst traf.",
        "Unter Elisabeth und die Schaffung der anglikanischen Staatskirche, wurde England zur protestantischen Vormacht in Europa.",
        "Viele am Hof waren der Königin sehr zugetan, darunter auch einige Verehrer wie Christopher Hatton oder Walter Raleigh, der in Nordamerika einen Staat Virginia nach ihr benannte. Nach einer beinahe tödlichen Pockenerkrankung, ernannte sie Robert Dudley zum Protector des Königreiches, falls ein solcher Fall erneut eintreten sollte. Sie stand diesem sehr nahe und war ihm zugetan.",
        "Im Krieg gegen Spanien zog die Königin Verhandlungen den Kriegshandlungen vor. Der Krieg war dem Glauben geschuldet, da Spanien ein katholisches, England aber ein evangelisches Land war. Auch in den Niederlanden wurde gegen Spanien gekämpft. Als Dudley bei Kämpfen in den Niederlanden starb schloss sich die Königin tagelang in ihren Gemächern ein, bis schlussendlich die Tür eingetreten wurde, da man sich Sorgen um ihr Wohlergehen machte. Sie Königin betrachtete ihr Land als ihren Ehemann und heiratete niemals.",
        "Sie ernannte niemals einen Nachfolger, wusste jedoch, dass der Sohn ihrer ehemaligen Rivalin Mary Stuart vom damaligen Regierungschef bevorzugt wurde.",
        "Elisabeth starb am 24.03.1603 als Letzte der Familie Tudor und als eine Frau, die einem ganzen Zeitalter seinen Namen gegeben hat."]
};

let bild4: Zeichnungen = {
    name: "./styles/fotos/anne-bonny.jpg",
    nameZwei: "1698",
    id: "Anne Bonny",
    array: ["Anne Bonny und ihre Crew sind als legendäre Piraten der Karibik in die Geschichte eingegangen.",
        "Die historische Korrektheit der folgenden Fakten ist nicht mehr zu belegen und entstammen alle dem Buch „A General History of the Pyrates: from their first rise and settlement in the island of Providence, to the present time“, welches Daniel Defoe geschrieben haben soll.",
        "Bonny war die Tochter einer Magd, die zusammen mit ihrem Arbeitgeber William Cormac (Jurist) ein Kind bekam. Zur damaligen Zeit bedeutete eine Bastardtochter große Schande für die Familie weshalb ihr Vater versuchte sie zu verheimlichen, indem er Bonny als Jungen verkleidete und als entfernten Verwandten ausgab. Der Schwindel flog jedoch auf und die Familie zog in die Britischen Kolonien,(heute USA) nach South Carolina ",
        "Dort entwickelte sich das Leben der Familie sehr gut und das kaufmännische Verständnis des Vater macht diesen zu einem reichen Plantagenbesitzer. Anne war dieses Leben allerdings zu langweilig und sie trieb sich des Öfteren im örtlichen Hafen herum, wo sie zwielichtigen Gestalten begegnete. Sie traf dort auch auf ihren zukünftigen Ehemann James Bonny. Nach der Heirat verstieß sie ihr Vater.",
        "Daraufhin reisen die beiden in die Piratenhochburg New Providence (Nassau). Dort verlässt Bonny ihren Mann, um bei dem Piraten Charles Vane anzuheuern. Sie traf außerdem auf Calico Jack Rackham der auf dem Schiff der Steuermann war. Da sie als Frau auf einem Piratenschiff nicht erwünscht war verkleidet sie sich erneut als Mann.",
        "Zusammen mit Calico Jack Rackham setzte sie Vane erst ab, dann aus und die beiden zogen mit einem eigenen Schiff allein los. Ein Mann namens Mark Read heuerte auf diesem Schiff an. Bei Read handelte es sich jedoch ebenfalls um eine Frau, Mary Read. Zusammen ziehen die drei plündernd durch die Karibik und werden schnell zu einem berüchtigten Trio.",
        "Bonny wurde das erste Mal schwanger und lies das Kind auf Kuba zurück. Wenn man den Geschichten glauben schenkt, soll das Kind von Calcio Jack Rackham gewesen sein.",
        "1720 wurde das Schiff (die Revenge) von einem englischen Kriegsschiff angegriffen undabgesehen von den beiden Frauen, war die Crew so betrunken dass sie sich unter Deck versteckte. Die beiden Frauen kämpften also allein. Als dann der Kampf bereits verloren war, soll Bonny auf ihre eigenen Männer geschossen haben. Am 16.November 1720 wurde dann das Urteil über die Piratenbande gefällt. Der Tod durch den Strick sollte ihr Schicksal sein.",
        "Anne Bonny war zu diesem Zeitpunkt erneut schwanger, weshalb die Hinrichtung aufgeschoben wurde. Auch Mary Read war schwanger jedoch starb sie kurz darauf an einem Fieber. Calcio Jack Rackham starb allein durch den Strick. Anne Bonnys Schicksal ist ab diesem Zeitpunkt nicht mehr bekannt. Doch ging auch sie als eine der berühmtesten Piratinnen in die Geschichte ein.",
        "Zitiert aus der Quelle: http://ratten-kogge.de/anne%20bonny.html "]
};

let bild5: Zeichnungen = {
    name: "./styles/fotos/katharina.jpg",
    nameZwei: "1729",
    id: "Katharina die Große",
    array: ["Katharina die Große wurde am 2. Mai 1729 in Stettin in Pommern (heute Polen) geboren",
        "Sophie Auguste Friederike von Anhalt-Zerbst war eine bedeutende Zarin bzw. Kaiserin des Russischen Reiches (1762–1796). Sie war Herzogin von Holstein-Gottorf. In der zweiten Hälfte des 18. Jahrhunderts lenkte sie die Geschicke Russlands und nahm großen Einfluss auf die europäische Politik. Sie trägt als einzige Frau den Beinamen „die Große“. Sie verstarb mit 67 Jahren am 17. November 1796 (Gregorianischer Kalender, am 6. November 1796 nach julianischem Kalender) in Sankt Petersburg in Russland.",
        "Als Prinzessin Sophie Auguste Friederikevon Anhalt-Zerbst geboren, heiratete sie 1745 den russischen Thronfolger PETER III.",
        "Sophie verlebte ihre Kindheit in Stettin. Sie war ein einnehmendes Kind und wusste zu gefallen. Sie interessierte sich sehr für Bildung und Sprachen. Auf Reisen mit ihrer Mutter begegnete Sophie dem damaligen Preußenkönig Friedrich dem II. welchen sie mit ihrer Sprachgewandtheit und Schlagfertigkeit begeisterte. Der König wirkte auf Sophies Eltern ein, um Sophie an den russischen Hof zu bringen. Er sah in ihr die Möglichkeit seine politischen Pläne zu verwirklichen.",
        "Die Zarin Elisabeth Petrowna favorisierte auf Anraten des preußischen Königs Sophie als Gemahlin für ihren Nachfolger Peter III. Die Heirat erfolgte am 21.08.1745. Nachdem sie zum russisch-orthodoxen Glauben konvertiert war wurde sie umbenannt in Kaiserliche Hoheit Katharina von Russland (russ. Jekaterina II. Aleksejewna). Liebe empfand sie für ihren Gatten niemals und war angewidert von dessen Grausamkeit und geistiger Beschränktheit.",
        "Sie wollte am russischen Hof Einfluss gewinnen und wollte Russland wirtschaftlich, wie auch politisch mit dem modernen Westeuropa gleichsetzen. Sie lernte heimlich über Politik und Wirtschaft, gab sich am Hofe jedoch als lediglich als interessiertes Mädchen.",
        "Katharina soll 21 Liebhaber gehabt haben.",
        "Am 20.09.1745 gebar Katharina ihren ersten Sohn Paul. Obwohl vermutlich ihrer Affäre mit Sergej Saltykow entstammend, wurde das Kind als ehelich anerkannt. Nach der Geburt übernahm Zarin Elisabeth das Kind an sich, was sich negativ auf die Beziehung der beiden Frauen auswirkte. Sie brachte außerdem eine Tochter, Anna zur Welt, diese verstarb jedoch sehr jung.",
        "Zarin Elisabeth verstarb am 25.12.1761 und der Peter Fjodorowitsch, Katharinas Ehemann, bestieg als Zar Peter III. den russischen Thron. Mit der Politik des Gatten nicht einverstanden, beschließt sie 1762 zu handeln. Zusammen mit dem Kommandanten Alekseij Orlow, mit dessen Bruder sie eine Affäre hatte, gelang es ihr mithilfe der russischen Armee Peter III. am 28.06.1762 vom Thron zu stürzen. Daraufhin ließ sie sich selbst in Petersburg zur Zarin proklamieren.",
        "Ihr Ehemann wurde später im Gefängnis von Alekseij Orlow ermordet. Katharina veranlasste jedoch nie eine Untersuchung, da sie auf die Unterstützung Orlows und dessen Armee angewiesen war. So erhielt sie den Ruf der Gattenmörderin.",
        "Am 22.09.1762 wurde sie in Moskau zur Zarin Katharina II. von Russland gekrönt und zur absoluten Herrscherin über das größte europäische Imperium erklärt.",
        "Katharina versuchte auf vielen Gebieten Reformen durchzuführen so entstanden auf ihre Initiative hin die deutschen Wolga-Kolonien. Sie förderte Landwirtschaft, Industrie und Handel in unterbevölkerten Gebieten. Sie ließ Einwanderer aus Deutschland und anderen europäischen Ländern anwerben und besiedelte so den Süden von Russland. Sie regte außerdem die Weiterentwicklung der Kunst, Kultur und Wissenschaft an.",
        "Da sie sich zum Regieren auf die Stütze des Adels verließ musste sie zu dessen Gunsten einige Reformen durchbringen, die dem gemeinen Volk jedoch nicht zusagten. So stellte sie sich zum Beispiel gegen eine Abschaffung der Leibeigenschaft. Infolgedessen spitzte sich die soziale Situation der leibeigenen Bauern zunehmend zu und kam der Sklaverei gleich. Während des türkischen Kriegs kam es unter der Führung von Jemeljan Pugatschow zu einem großen Bauern- und Kosakenaufstand.",
        "Im August 1773 gelang es Katharina II., den Aufstand blutig niederzuschlagen. Dies veranlasste sie zu Reformen, und es begann ihre reaktionäre Regierungszeit. In dieser Zeit verstärkte sie die Privilegien des Adels und die Situation der Bauen verschlimmerte sich.",
        "34 Jahre regierte die Zarin mit unerschüttertem Willen zur Macht. Sie starb 17.11.1796 in Zarskoje Selo (heute Puschkin) nach mehreren Schlaganfällen. Russland war unter Katharina II. zu einer Großmacht geworden, die eine maßgebliche Rolle im Weltgeschehen spielte.",
        "Zitiert nach der Quelle: https://www.lernhelfer.de/schuelerlexikon/geschichte/artikel/katharina-ii"]
};

let bild6: Zeichnungen = {
    name: "./styles/fotos/LuiseVP.jpg",
    nameZwei: "1776",
    id: "Luise von Preußen",
    array: ["Luise von Preußen wurde am 10. März 1776 in Hannover im Heiligen Römischen Reich (heute Deutschland) geboren.",
        "Luise Auguste Wilhelmine Amalie von Preußen war die Ehefrau von König Friedrich Wilhelm III. und damit die Königin von Preußen (1797–1810). Sie wurde im Widerstand gegen Napoleon Bonaparte zur Symbolfigur („Königin der Herzen“). Sie verstarb am 19. Juli 1810 mit 34 Jahren auf Schloss Hohenzieritz.",
        "Mit nur sechs Jahren erlebt Luise wie ihre Mutter stirbt. Zusammen mit ihren zwei Schwestern verbringt sie ab 1786 einen Großteil ihrer Kindheit bei der Großmutter in Darmstadt. Diese ist unbeschwert und glücklich. Sie viel auf durch ihre frische und unbeschwerte Art, war unpünktlich und naschte gerne. Mit sechzehn Jahren wurde Luise in die Gesellschaft eingeführt, davor lebte sie beinahe bürgerlich, was sie sehr bescheiden werden ließ.",
        "Graf Metternich veranstaltete einen Ball zur Feier der Krönung von Kaiser Franz II. in Frankfurt. Dort lernte sie auch ihren zukünftigen Ehemann den Kronprinzen Friedrich Wilhelm kennen. Nach sechs Monaten wird aus dieser Begegnung Liebe. Friedrich Wilhelm und Luise heirateten am 24. Dezember 1793. LUISE brachte am 15. Oktober 1795 Kronprinz Friedrich Wilhelm zur Welt und am 22. März 1797 Prinz Wilhelm, der 1871 erster Kaiser des Deutschen Reiches wird. 1797 mit dem Tod Friedrich Wilhelms II. übernahm ihr Ehemann den Thron.",
        "Luise war an Politik vorerst nicht interessiert, dies änderte sich jedoch im Jahr 1804. Den stärksten Einfluss auf ihr politisches Bewusstsein hatte Napoleon, ihr größter Feind. Dieser verletzte immer weitere vertragliche Rechte Preußens. Einer ihrer ersten politischen Partner war der preußische Außenminister Hardenberg.",
        "Sie stand ihrem eher zweifelnden und unentschlossenen Ehemanne stets zur Seite und drängte darauf, die Kontakte mit dem französischen Kaiser abzubrechen. 1806 wird Preußen in einem Bündnisvertrag mit Frankreich Hannover angeboten, doch Luise sieht dieses Bündnis skeptisch. In einem Brief an ihren Ehemann schrieb sie „Napoleon ist ein Schuft!“ und wurde somit zur Symbolfigur des Widerstands.",
        "Als das preußische Heer 1806 bei Jena und Auerstedt vernichtend geschlagen wurde, floh die königliche Familie mit den Kindern nach Königsberg in Ostpreußen. Geknebelt durch die riesigen Kontributionszahlungen an Frankreich, befand sich Preußen damals in einer katastrophalen Lage.",
        "Im Juli 1807 versuchte Luise Napoleon I. in Tilsit in einem Vier-Augen-Gespräch zu mehr Milde gegen den Verlierer Preußen zu bewegen. Wenn auch der Versuch erfolglos blieb, so entstand doch das Bild von der beherzten Patriotin Luise.",
        "Königin Luise trug zu ihrer Lebzeit einige Reformen an ihren Ehemann heran. Sie förderte die fortschrittlichen Kräfte Preußens und Reformer. Einige von Ihnen waren Der Freiherr vom Stein, Der Freiherr vom Hardenberg, Wilhelm von Humboldt, Von Scharnhorst und Von Gneisenau. Die Reformen waren eine Heeresreform, Bildungsreform, Agrarreform, Verwaltungsreform, Finanzreform, Regierungsreform, Städteordnung, Gewerbefreiheit, freie Berufswahl, freie Wahl des Wohnsitzes, Judenemanzipation.",
        "Luise gilt ohne Zweifel als die wohl bedeutendste deutsche Königin.",
        "Zitiert aus der Quelle: https://www.lernhelfer.de/schuelerlexikon/geschichte/artikel/luise-von-preussen"]
};

let bild7: Zeichnungen = {
    name: "./styles/fotos/Sisi.jpg",
    nameZwei: "1837",
    id: "Sisi",
    array: ["Elisabeth Amalie Eugenie von Österreich-Ungarn war als Ehefrau von Franz Joseph I. Kaiserin von Österreich (ab 1854). Sie wurde u. a. durch mehrere Filme im 20. Jahrhundert zu einem weltweiten Idol. Sie wurde am 24. Dezember 1837 in München geboren und verstarb mit 60 Jahren am 10. September 1898 in Genf in der Schweiz.",
    "Sisi wurde am 24. Dezember 1837 in München geboren. Sisi entstammte einer Wittelsbacher Nebenlinie. Ihr Vater Max war Herzog in Bayern und nicht von Bayern. Ihre Mutter Herzogin Ludovica war die Tochter des bayerischen Königs und überdies die Tante des österreichischen Kaisers.", 
    "Sisi wurde sehr durch ihren Vater geprägt, der eine starke und schillernde Persönlichkeit war. Herzog Max war politisch liberal, unkonventionell und lebte sein eigenes Leben. Seine Zeit verbrachte er gerne mit Reisen, Feiern und Reiten. Und er liebte den Zirkus. Elisabeth und ihre sieben Geschwister erhielten keine klassische Erziehung, wie es für Abkömmlinge des Hochadels vorgesehen war. Normalerweise hätten Mädchen wie Sisi tanzen, sticken und Sprachen erlernen müssen.", 
    "Die Mutter des österreichischen Kaisers Franz Joseph lud Sisi und zwei ihrer älteren Schwestern nach Bad Ischl ins Salzkammergut ein. Dort sollten die jungen bayerischen Prinzessinnen ihren Cousin Franz Joseph wieder treffen. Franz Joseph, so hatte es seine Mutter beschlossen, sollte heiraten – und zwar im katholisch-deutschen Raum. Die eigene Familie erschien dafür perfekt.", 
    "Er verliebte sich in Sisi, diese war jedoch hin- und hergerissen. Einerseits war Franz Joseph eine gute Partie. Andererseits hatte Sisi auch Angst vor dem Leben, das sie erwarten würde. Jedoch blieb ihr keine andere Wahl als das Angebot einer Heirat anzunehmen. Einen Tag vor der Hochzeit zog die Braut feierlich in Wien ein. In einer gläsernen Kutsche saß sie neben der Brautmutter. Verängstigt und überfordert brach Sisi in Tränen aus. Am 24. April 1854 fand die Trauung in der Augustinerkirche statt.", 
    "Sisis Leben in Wien hatte sich radikal verändert. In ihrem früheren Leben hatte sie keine Verpflichtungen. Nun war sie einem strengen Programm unterworfen. Nur zwei Wochen nach der Trauung schrieb Sisi in einem Gedicht - Ich bin erwacht in einem Kerker, und Fesseln sind an meiner Hand. Und meine Sehnsucht immer stärker – und Freiheit! du, mir abgewandt!",
    "Nur ein Jahr nach der Hochzeit wurde die erste Tochter Sophie geboren. Es folgten Gisela und schließlich der Kronprinz Rudolf. Der Tod der ältesten Tochter war für Sisi eine Zäsur. Für Elisabeth war der Tod ihrer ältesten Tochter so ein großer Schock, dass sie die Kinder zur Erziehung ihrer Schwiegermutter übergab.", 
    "Sisi litt schon wenige Jahre nach der Hochzeit unter Krankheiten und Depressionen und ging für zwei Jahre auf Reisen. In dieser Zeit hatte sie sich von ihren Kindern entfremdet. Der kleine Sohn Rudolf konnte sich kaum noch an seine Mutter erinnern, als sie ihn wiedersah.", 
    "Als Trotzreaktion interessierte sich Sisi für alles, was am Hof verpönt war, zum Beispiel Ungarn. Außerdem hatte Sisi ungarische Hofdamen, die sie für die Verhältnisse in ihrem Land sensibilisiert hatten. Es kam zu einem Ausgleich mit Ungarn und Sisi wurde neben Franz Joseph zur ungarischen Königin gekrönt.", 
    "Nach dem Selbstmord ihres Sohnes Rudolf, versank Sisi nur noch tiefer in Depressionen. ", 
    "Im Frühherbst 1898 verbrachte Sisi einige Tage am Genfer See. Am 10. September wurde Sisi von einem fremden Mann eingeholt und niedergestochen. Sie starb daraufhin. Sie wurde in der Kapuzinergruft in Wien bestattet.", 
    "Quelle: https://www.planet-wissen.de/geschichte/adel/legendaere_sisi/index.html"] 
};

let bild8: Zeichnungen = {
    name: "./styles/fotos/Marie-Curie.jpg",
    nameZwei: "1867",
    id: "Marie Curie",
    array: ["Marie Sklodowska wurde am 7. November 1867 in Warschau geboren. Die französische Chemikerin und Physikerin legte die Grundlagen für die moderne Kernphysik. Marie Curie erhielt für den gelungenen Nachweis von Radioaktivität und Strahlungsphänomenen 1903 mit ihrem Ehemann Pierre Curie und mit Antoine Henri Becquerel den Physiknobelpreis. Für die Entdeckung der Elemente Radium und Polonium wurde Curie 1911 mit dem Chemienobelpreis ausgezeichnet. Damit erhielt Curie als erste Frau überhaupt sowie als erste Frau ein zweites Mal den Nobelpreis.", 
    "1883 verließ sie das Lyzeum mit Auszeichnung und nahm dann eine Stelle als Erzieherin an. In Frankreich begann sie 1891 ein Studium der Mathematik und der Physik an der Pariser Sorbonne. Sie schloss beide Fächer mit Auszeichnung ab und wurde Doktorandin des Physikprofessors Antoine Henri Becquerel. Am 26. Juli 1895 ging sie mit dem Physiker Pierre Curie die Ehe ein und gemeinsam arbeiteten sie in einem Laboratorium unter primitiven Umständen. Becquerel entdeckte die Strahlung des Uranium.", 
    "Curie war überzeugt, dass diese Strahlung auch in anderen Elementen nachweisbar wäre. Sie arbeitete ab 1896 mit ihrem Mann an dem Projekt. Durch die Isolierung von Radium und Polonium entdeckten sie, dass die Strahlung radioaktiv war. Auch die Radioaktivität von Thorium stellten sie nach mehreren Versuchen fest. Dabei prägte sie 1898 selbst den Begriff Radioaktivität. 1898 gelang ihnen die Isolierung des radioaktiven Elements Radium. Im Dezember desselben Jahres erfolgte die Veröffentlichung der Arbeit.", 
    "Im Jahr 1901 konnte Pierre Curie erstmals Atomenergie nachweisen. 1902 isolierte Marie erstmals Radium. 1903 promovierte sie in Physik. Gemeinsam mit ihrem Mann und Becquerel erhielt sie 1903 den Nobelpreis für Physik für die Entdeckung der Radioaktivität und der Strahlungsphänomene. Ab 1906 wurden bei ihm deutliche Strahlenschäden sichtbar. Nach dem Unfalltod ihres Mannes, der am 19. April 1906 von einem Pferdewagen überrollt wurde, führte Curie als erste Frau, die an der Sorbonne zur Professorin berufen wurde, die Vorlesungen ihres Mannes weiter.", 
    "In den Jahren 1908 und 1910 veröffentlichte sie die Bücher Oeuvres de Pierre Curie und Die Radioaktivität. 1911 erhielt Marie Curie den Chemienobelpreis für den gelungen Nachweis der Isolierung der Elemente Radium und Polonium. 1914 wurde sie Leiterin des Instituts du Radium. Im Ersten Weltkrieg entwickelte sie mit ihrer Tochter Irène eine mobile Röntgenstation, die auch an der Front für verletzte Soldaten eingesetzt wurde. Von 1918 bis 1927 forschte Curie mit ihrer Tochter am Radium-Institut in Paris. Das Institut entwickelte sich im Laufe der Zeit zu einem Zentrum der Nuklearphysik. In Begleitung ihrer beider Töchter bereiste Curie 1920 die USA. Präsident Warren G. Harding überreichte ihr am 20. Mai in Washington ein Gramm Radium als symbolische Anerkennung für ihre Forschungsarbeit.", 
    "In dieser Zeit zeigten sich an Curies Gesundheit erste Strahlenschäden. Kurz danach wurde sie Mitglied der Akademie für Medizin. Sie führte chemische Untersuchungen an radioaktiven Substanzen durch, um deren Nutzungsmöglichkeiten für die Medizin zu erforschen. 1922 wurde sie zum Mitglied der Internationalen Kommission für geistige Zusammenarbeit des Völkerbundrates ernannt. Am 4. Juli 1934 starb Marie Curie in Sancellemoz in der Schweiz an Leukämie. Verursacht wurde diese Krankheit wahrscheinlich durch die Überdosen radioaktiver Strahlung während ihrer Arbeit. Die Leichname von Marie Curie und ihrem Mann wurden im Panthéon beigesetzt.", 
    "Quelle: https://whoswho.de/bio/marie-curie.html#"]
};

let bild9: Zeichnungen = {
    name: "./styles/fotos/Earhart.jpg",
    nameZwei: "1897",
    id: "Amelia Earhart",
    array: ["Amelia Earhart war eine US-amerikanische Flugpionierin, Schriftstellerin und Frauenrechtlerin. Sie flog unter anderem 1932 als erste Frau allein über den Atlantik. 1937 ist sie bei dem Versuch einer Weltumrundung mit dem Flugzeug verschollen.", 
    "Sie wurde am 24.Juli 1897 in Atchison, Kansas in den Vereinigten Staaten geboren. Sie verstarb mit nur 39 Jahren am 2. Juli 1937 auf der Route zur Howland Island, United States Minor Outlying Islands.", 
    "Gegen Ende des ersten Weltkriegs hatte sie als Tochter eines deutsch-amerikanischen Juristen als Militärkrankenschwester in Toronto gearbeitet. Sie entdeckte dort ihre Leidenschaft für Flugzeuge, da in der Nähe Flieger trainierten. 1920 bekam sie das erste Mal die Chance, in einem Flugzeug mitzufliegen: „In dem Moment als wir den Boden verließen, wusste ich: Ich selbst musste fliegen“, schrieb sie in ihrer Autobiografie „The fun of it“ (1932).", 
    "Sie erlangte erstmals Bekanntheit als sie als erste Passagierin an einem Nonstop-Flug über den Atlantik teilnahm. Es gefiel ihr allerdings nicht nur als „zusätzliches Gewicht“ an Bord zu sein.", 
    "1932 überquerte sie mit einer modifizierten Lockheed Vega 5B den Atlantik. Sie musste, aufgrund von schlechtem Wetter und technischer Probleme, bereits in der Nähe von Londonderry in Irland landen.", 
    "Danach starteten die Vorbereitungen für ihr größtes Projekt, die Überquerung des Pazifiks im Alleinflug. Den Plan habe sie gefasst, weil sie Fliegen liebe und einfach, weil sie es wollte, schrieb Earhart später. Im Januar 1935 meisterte sie die Strecke von Honolulu nach Oakland in Kalifornien. Noch im selben Jahr folgte der Soloflug Mexiko-Stadt nach Newark (New Jersey).", 
    "Am 21. Mai 1937 startete sie in Miami zur Umrundung des Äquators. Bis Ende Juni hatten sie und ihr Funker und Navigator Fred Noonan schon drei Viertel der Strecke zurückgelegt. Von Neuguinea aus sollte die letzte Etappe am 2. Juli über den Pazifik zur Howardinsel führen, wo ein letzter Zwischenstopp geplant war. Doch dort kamen die beiden nie an.", 
    "Die US-Regierung startete eine aufwendige Rettungsaktion. Nachdem bis zum 19. Juli 400.000 Quadratkilometer abgesucht worden waren, wurden Earhart und Noonan für tot erklärt. Ihr Schicksal liefert seitdem Stoff für zahlreiche Spekulationen. Wahrscheinlich ist, dass fehlerhafte Funkpeilung die Crew das winzige Eiland verfehlen ließ.", 
    "Die Pilotin sollte trotzdem als Figur der Frauenrechtsbewegung und als Flugpionierin in die Geschichte eingehen.", 
    "Quelle: https://www.welt.de/geschichte/kopf-des-tages/article224084528/Amelia-Earhart-Die-erste-Pazifikueberquerung-im-Alleinflug.html"]
};

let bild10: Zeichnungen = {
    name: "./styles/fotos/Astrid_Lindgren.jpg",
    nameZwei: "1907", 
    id: "Astrid Lindgren",
    array: [" Astrid Anna Emilia Lindgren war eine schwedische Schriftstellerin und eine der bekanntesten Kinderbuchautorinnen, die die Geschichten rund um beliebte Kinderhelden wie „Pippi Langstrumpf“, „Michel aus Lönneberga“, „Ronja Räubertochter“ und „Kalle Blomquist“ schrieb. Sie wurde am 14. November 1907 in Vimmerby in Schweden geboren und verstarb mit 94 Jahren am 28. Januar 2002 in Stockholm.", 
    "Erzählte ihrer Tochter als diese krank war von Pipi Langstrumpf. Als die Tochter schon wieder gesund war, wollte sie trotzdem immer neue Geschichten von Pipi Langstrumpf hören. Lindgren schickte das Buch später an einen Verlag.", 
    "Und so wurde Astrid Lindgren die berühmteste Kinderbuchautorin der Welt. Weil sie Geschichten erzählt, in denen Kinder frech, fröhlich und verrückt sein dürfen – eben Kinder. Sie selbst wäre es gern ihr Leben lang geblieben!", 
    "Astrid Lindgren wurde am 14. November 1907 als zweites von vier Kindern auf einem Hof in der schwedischen Ortschaft Vimmerby geboren. Ihr Geburtsname lautete Astrid Anna Emilia Ericsson.", 
    "Dort erlebt Astrid mit ihren drei Geschwistern genau jene Bilderbuchkindheit, die sie in ihren Geschichten über Pippi und die - Kinder von Bullerbü - für immer festhalten wird: Ewig stromern sie durch Frühlingswiesen, pflücken im Sommer saftige Kirschen, die sie sich an die Ohren hängen. Im Winter bewachen Schneemänner den Bauernhof.", 
    " - Die beste Zeit meines Lebens war, wenn ich spielen durfte. Ich fand es nicht besonders lustig, größer zu werden -, erzählt Astrid später einmal. Und Pippi spricht ihr aus der Seele, wenn sie erklärt, dass Erwachsene langweilig sind.", 
    "1924 bot ihr der Chefredakteur der Ortszeitung eine journalistische Ausbildung an. Sie recherchierte, schrieb eigene Geschichten und korrigierte Texte der anderen Redakteure. Diese Arbeit begeisterte sie und machte ihr viel Freude.", 
    "Als sie im Alter von 18 Jahren überraschend von einem verheirateten Mann schwanger wurde, muss sie die Stadt jedoch verlassen. Eine Schande, sagen viele! Astrid zieht von Vimmerby nach Stockholm und fängt dort mit ihrem Sohn Lars ein neues Leben an, der jedoch bald an eine Pflegefamilie weitergegeben wurde. Dieser zeitweise Verlust hat sie zu vielen späteren Geschichten veranlasst.", 
    "Erst vier Jahre später, als die Pflegemutter krank wurde, konnte Astrid ihren Sohn zu sich nehmen. Mittlerweile arbeitete die junge Mutter als Sekretärin und war mit Sture Lindgren verheiratet. Mit ihm bekam sie 1934 auch eine Tochter, Karin.", 
    "-	Wenn ich schrieb - , erzählt Astrid, - war ich für alle Sorgen unerreichbar. - Und davon gibt es einige: Ihr Mann, ihr Bruder, ihr Sohn sterben. All die traurigen Erlebnisse verarbeitet sie in dem Buch „Die Brüder Löwenherz“",
    "1981 vollendet Astrid Lindgren mit Ronja Räubertochter das letzte ihrer Kinderbücher. Am 28. Januar 2002 stirbt sie. Doch Astrid, die niemals hat erwachsen werden wollen, lebt in den Kindern ihrer Geschichten weiter. In Karlsson, Michel, Madita – und in Pippi.", 
    "Ihren Erfolg als Schriftstellerin nutzte sie zu Lebzeiten, um sich für Menschen- und Tierrechte einzusetzen. Für diese Leistungen bekam sie 1978 den Friedenspreis des Deutschen Buchhandels sowie 1994 den Ehrenpreis des Right Livelihood Awards, eine Art alternativer Nobelpreis.", 
    "Quelle: https://www.geo.de/geolino/mensch/astrid-lindgren-autorin-leben-werk"]
};

let bild11: Zeichnungen = {
    name: "./styles/fotos/sophieScholl.jpg",
    nameZwei: "1921",
    id: "Sophie Scholl",
    array: ["Sophia Magdalena Scholl war eine Widerstandskämpferin gegen die Diktatur des Nationalsozialismus und Mitglied der Gruppe „Weiße Rose“, die mit Flugblättern zum Sturz der Nationalsozialisten aufrief und nach ihrer Enttarnung verhaftet und mit der Guillotine enthauptet wurde. Sie wurde am 9. Mai 1921 in Forchtenberg geboren und starb am 22. Februar 1943 mit nur 21 Jahren in München. Ihr Geburtstag jährt sich 2021 zum hundertsten Mal.", 
    "Sophie Scholl wurde am 9. Mai 1921 in Forchtenberg geboren. Mit sieben Jahren kam sie in die Grundschule. 1932 zog sie mit ihrer Familie nach Ulm, dort besuchte ein Mädchengymnasium. Mit zwölf Jahren trat sie dem Bund Deutscher Mädel (BDM) bei. Die anfängliche Begeisterung wandelte sich dann aber nach und nach in Kritik um.", 
    "1937 wurde sie aufgrund der fortgeführten Arbeit in der Hitlerjugend zusammen mit ihrem Bruder für mehrere Wochen in Stuttgart inhaftiert. Im Frühjahr 1940 machte sie ihr Abitur im Fach Deutsch. Danach begann sie eine Ausbildung zur Kindergärtnerin, in der Hoffnung so dem Reichsarbeitsdienst als Vorleistung für ein Studium zu entgehen. Dies erwies sich als Irrtum, sie wurde zwangsweise ein halbes Jahr zum Reichsarbeitsdienst und ein weiteres halbes Jahr zum Kriegshilfsdienst verpflichtet.", 
    "Im Mai 1942 nahm sie an der Universität München ein Biologie- und Philosophiestudium an. Im Frühjahr 1942 entschlossen sich Sophie und Hans Scholl zusammen mit ihren Freunden zur illegalen und öffentlichen Kritik und beteiligten sich an der Herstellung und Verbreitung von Flugblättern der studentischen Widerstandsgruppe “Weiße Rose“.", 
    "Die unter anderem in Köln, Stuttgart, Berlin und Wien verteilten Flugblätter verursachten großes Aufsehen und führten 1943 zu einer intensiven Fahndung nach den Verursachern.", 
    "Am 18. Februar 1943 verteilten die Geschwister Scholl etwa 1700 Flugblätter in der Münchener Universität. Der Hausmeister beobachtete sie und meldete sie. Die Geheime Staatspolizei (Gestapo) verhaftete sie. Nach dreitägigem Verhör folgte der Prozess vor dem “Volksgerichtshof“. Am 22. Februar 1943 wurden Sophie und Hans Scholl gemeinsam mit ihrem Freund Christoph Probst zum Tode verurteilt und noch am selben Tag im Strafgefängnis München-Stadelheim durch das Fallbeil hingerichtet.", 
    "Quelle: https://www.abipur.de/referate/stat/663768433.html"]
};

let bild12: Zeichnungen = {
    name: "./styles/fotos/anne-frank.jpeg",
    nameZwei: "1929",
    id: "Anne Frank",
    array: ["Annelies Marie Frank war ein jüdisches deutsches Mädchen und Opfer des Holocaust, das sich mit ihrer Familie in einem Amsterdamer Hinterhaus vor den Nationalsozialisten versteckte, kurz vor Kriegsende deportiert wurde und dessen Geschichte durch sein von ihrem Vater Otto Frank veröffentlichtes Tagebuch bekannt wurde. Sie wurde am 12. Juni 1929 in Frankfurt am Main geboren und starb mit nur 15 Jahren im Februar 1945 im Konzentrationslager Bergen-Belsen.", 
    "Ich finde es sehr komisch, dass erwachsene Menschen so schnell, so viel und über alle möglichen Kleinigkeiten Streit anfangen; bis jetzt dachte ich immer, dass Zanken eine Kindergewohnheit wäre, die sich später geben würde.", 
    "Anne Frank wurde am 12. Juni 1929 in Frankfurt am Main geboren. Ihre Familie lebte schon immer in Deutschland und pflegte den jüdischen Glauben. Als im Jahr 1933 die nationalsozialistische Partei von Adolf Hitler an die Macht kam, wurde das Leben der Juden in Deutschland aber immer schwieriger.", 
    "Auch Anne Franks Familie beschloss 1933 - als Hitler an die Macht kam - Deutschland zu verlassen. Als Anne vier Jahre alt war, wanderten die Eltern mit ihr und ihrer Schwester Margot in die Niederlande aus. In Amsterdam konnte die Familie zunächst einige unbeschwerte, glückliche Jahre verbringen.", 
    "Am 10. Mai 1940 jedoch marschierten deutsche Truppen in den Niederlanden ein. Annes Familie hatte vorerst Glück: Sie versteckten sich gemeinsam mit einer weiteren jüdischen Familie im Hinterhaus des ehemaligen Geschäfts von Annes Vater - das ging nur mit der Hilfe der Angestellten des Geschäfts. Die Angst, entdeckt zu werden, war allerdings ihr ständiger Begleiter. Anne, zu dieser Zeit zwölf Jahre alt, begann, ihre Gedanken, Gefühle, Ängste und Erlebnisse in ihrem Tagebuch niederzuschreiben.", 
    "Doch am 4. August 1944 wurde das Hinterhaus, in dem sich die acht Flüchtlinge versteckten, von der Polizei gestürmt. Die Nazis brachten sie ins nächst gelegene Lager. Von dort aus ging es dann weiter in das berüchtigte Vernichtungslager Auschwitz in Polen.", 
    "Anne Frank, ihre Mutter und ihre Schwester Margot gelangten zunächst nach Bergen-Belsen bei Celle. Hier starben täglich Tausende Menschen durch Hunger, Kälte und Krankheit.", 
    "Inzwischen stand die deutsche Armee kurz vor der Niederlage. Hoffnung auf ein baldiges Ende des Krieges kam auf. Nur wenige Wochen, bevor der Krieg zu Ende war und die Gefangenen aus den Konzentrationslagern befreit wurden, bekamen Anne und Margot jedoch Typhus. Beide starben kurz nacheinander im März 1945 im Lager an dieser schweren Krankheit.", 
    "Der einzige Überlebende der Familie war Otto Frank, Annes Vater. 1947 veröffentlichte Otto Frank die Aufzeichnungen seiner Tochter. Anne hatte sich das so gewünscht. Das Buch wurde bisher in 55 Sprachen übersetzt und ist eines der meistgelesenen Werke der Welt. Erst 2009 wurde es von der UNESCO in das Weltdokumentenerbe aufgenommen.",
    "Quelle: https://www.geo.de/geolino/mensch/3119-rtkl-weltveraenderer-anne-frank"]
};


let bild13: Zeichnungen = {
    name: "./styles/fotos/Dian_Fossey.jpg",
    nameZwei: "1932",
    id: "Dian Fossey",
    array: ["Dian Fossey wurde am 16. Januar 1932 in Faifax im US-Bundesstaat Kalifornien geboren. Fosseys Berufswunsch Veterinärmedizinerin zu werden scheiterte zunächst an ihren schlechten Leistungen in den naturwissenschaftlichen Fächern. Sie begann eine Ausbildung als Bewegungstherapeutin. Nach ihrem Abschluss 1954 arbeitet sie mehrere Jahre in einem Kinderkrankenhaus in Lousville, Kentucky. Mit 31 Jahren besuchte sie einen Vortrag von dem bekannten Paläontologen Louis Leakey über Berggorillas. Sie war so begeistert und entschloss, Leakey bei seinen Forschungsarbeiten zu unterstützen.", 
    "1963 reiste sie nach Ostafrika und betrat dort erstmals die Region der Berggorillas. Das Wildern und Abschlachten der Gorillas veranlasste sie, sich sich für eine Arbeit in Afrika mit den Menschenaffen zu entscheiden. Bei der National Geographic Society und der Wilkie Stiftung fand sie Unterstützung für ein Forschungsprogramm in Ostafrika. 1967 begann sie ihre Arbeit im Kongo. Aufgrund politischer Unruhen musste sie jedoch ein halbes Jahr später den Kongo verlassen und sich nach Ruanda begeben. Dort begann sie erneut, ihr Forschungsprojekt aufzubauen. Im September 1967 gründete sie in den Virunga Mountains die Karisoke-Forschungsstation. In diese Region, 3000 Meter über dem Meeresspiegel, hatten sich die bedrohten Berggorillas zurückgezogen.", 
    "Dort begann Fossey mit der Beobachtung der scheuen Berggorillas. Monatelang durchstreifte Fossey die nebligen Berge, um die genaue Größe der Population festzustellen. Sie imitierte die Berggorillas in ihren Fressgewohnheiten, Gesten und Geräuschen. Ihre Ausdauer wurde 1970 belohnt, Dian Fossey konnte sich erstmals den Tieren bis auf 45 Meter nähern. Einige Zeit später gestattete ihr sogar ein 2-jähriges Gorillamännchen, das sie Digit nannte, eine Berührung. Durch ihre intensiven Beobachtungen konnte sie neue Erkenntnisse über das Verhalten von Berggorillas gewinnen. Als Dian Fossey schließlich von der Gorillagruppe akzeptiert war, lebte sie als Gruppenmitglied mit ihnen.", 
    "Im Jahr 1974 absolvierte sie ihre Doktorarbeit an der Cambridge Universität. Sechs Jahre später war sie an der Cornell Universität tätig. Ab dem Jahr 1983 arbeitete sie an der Niederschrift ihres Buches Gorillas im Nebel. Mein Leben mit den sanften Riesen. Mit der Veröffentlichung des Buches, in dem sie unter anderem die Öffentlichkeit vom Aussterben der Tiere informierte, wurde sie weltweit bekannt. Dian Fossey engagierte sich für das Überleben der Berggorillas. Sie kämpfte gegen die Wilderei und für den Naturschutz. Mit ihrem Einsatz schaffte sie sich aber auch Feinde, die ihr den Tod wünschten.", 
    "Am 27. Dezember 1985 fand ein Mitarbeiter Dian Fosseys halbnackte Leiche in ihrer Hütte im Virunga-Nationalpark (Ruanda). Der Mord wurde nie aufgeklärt. Dian Fossey beobachtete über 18 Jahre lang die Berggorillas. Aus ihrem anfänglich wissenschaftlichem Interesse entwickelte sich im Laufe der Zeit eine innige Bindung an die Tiere. Durch ihre aufopfernde Arbeit litt jedoch ihr Privatleben. Sie hatte mit Depressionen und Einsamkeit zu kämpfen. Ihre Leiche wurde auf ihren ausdrücklichen Wunsch auf dem Gorillafriedhof begraben. Ihr Grabstein trägt auf ihren Wunsch hin das Wort: Nyirmachabelli (die Frau, die einsam im Wald lebt).", 
    "Quelle: https://whoswho.de/bio/dian-fossey.html"]
};

let bild14: Zeichnungen = {
    name: "./styles/fotos/Jane_Godall.jpg",
    nameZwei: "1934",
    id: "Jane Goodall",
    array: ["Dame Valerie Jane Morris Goodall ist eine berühmte britische Verhaltensforscherin, die seit 1960 in Tansania das Verhalten von Schimpansen untersucht. Sie wurde in den 1930er-Jahren am 3. April 1934 in London geboren und feiert in diesem Jahr ihren 87. Geburtstag.", 
    "»Du kannst nicht einen einzigen Tag leben, ohne Einfluss auf die Welt um Dich    herum zu haben. Was Du tust, macht einen Unterschied; und Du musst entscheiden, welchen Unterschied Du machen willst.« – Jane Goodall", 
    "Jane Goodall wurde am 3. April 1934 in London geboren und wuchs an der Südküste Englands in Bournemouth auf. Schon früh begann Jane Goodall sich für alle Lebewesen in ihrer Umgebung zu interessieren. Sie nahm Regenwürmer mit in ihr Bettchen oder verschwand für Stunden, um einem Huhn beim Eierlegen zuzusehen. Ihre Mutter Vanne Goodall unterstützte immer die Leidenschaft ihrer Tochter. Als Teenager las sie „Tarzan“, „Dschungelbuch“ und Bücher über Afrika und träumte davon einmal in Afrika mit exotischen Tieren zu leben.", 
    "Nach Abitur und Handelsschule arbeitete sie als Sekretärin bei einem Dokumentarfilmproduzenten. Als sie mit 23 Jahren der Einladung einer Freundin nach Kenia folgt (1957) beginnt ihr Kindheits-Traum Formen anzunehmen. Um in Kenia bleiben zu können, arbeitete sie erst mal als Sekretärin in Nairobi. Sie hörte von dem Paläontologen und Anthropologen LOUIS LEAKEY, der in der Nähe nach der fossilen Herkunft der Menschen suchte und traf sich mit ihm. LEAKEY erkannte ihre Begeisterung für Afrika und die Tiere sofort und beschäftigte sie als Sekretärin bei seinen Ausgrabungen in der berühmten Olduvai-Schlucht.", 
    "Leakey interessierte sich für die Schimpansen am Ufer des Tanganjika-Sees, da er sich über sie weitere Kenntnisse zu unseren gemeinsamen Vorfahren erhoffte. Er schlug Jane Goodall eine Feldstudie über die Schimpansen vor und das war ihre Chance, auf die sie so sehr gewartet hatte.", 
    "1960 fuhren sie in das Gebiet des heutigen Gombe Nationalparks in Tansania und Jane Goodall begann mit ihren Forschungen, die sie später weltweit berühmt machen sollten und bis heute andauern.", 
    "Im Oktober 1960 konnte Jane Goodall zum ersten mal die Herstellung von Werkzeug bei Schimpansen beobachten: Er brach einen kleinen Ast von einem Busch, entfernte die Blätter und stutzte ihn zurecht, um ihn dann geschickt in die engen Ausgängen eines Termitenhügels einzuführen. Die Termiten bissen sich in den Stock fest und er zog sie zusammen wieder heraus und leckte sie ab, wie ein „Eis am Stiel“. Diese sensationelle Entdeckung stellte die vorherrschende Definition vom Menschen als alleinigem Werkzeughersteller auf den Kopf.", 
    "Durch Jane Goodalls Beobachtungen verringerte sie die Kluft zwischen Schimpansen und Menschen. Sie entdeckte, dass Schimpansen keine reinen Pflanzenfresser sind, sondern Fleisch essen, also genau wie der Mensch omnivor leben. Seit sie zusah, wie ein Schimpanse spontan neben einem Wasserfall zu tanzen begann, glaubt sie, dass dies ein Ausdruck der Gefühle sein könnte, die später bei den frühen Menschen zu „religiösen“ Verhaltensweisen führten.", 
    "1965, nachdem Sie ihre Arbeit vorrübergehend unterbrochen und an der Universität Cambridge promoviert hatte, kehrte sie als Dr. Jane Goodall nach Tansania zurück und gründete dort das Gombe Stream Research Center.", 
    "Von Anfang an gab Jane Goodall den Schimpansen nicht Nummern wie es damals üblich war, sondern Namen, da für sie immer klar war, das die Schimpansen logisch denken können und Gefühle haben. Mit dieser neuen Herangehensweise machte sie sich in der Wissenschaft erst mal unbeliebt, konnte sich aber durchsetzten und mittlerweile ist es eine weitverbreitet Methode in der beobachtenden Verhaltensforschung - ein wichtiger Schritt zum respektvollen Umgang mit den Tieren.", 
    "Das ist ihr bis heute wichtig. Sie setzt sich auf der ganzen Welt aufopfernd für die Tiere, die Natur, und damit auch für den Menschen ein und zeigt, in vielen verschiedenen Projekten und Organisationen, dass jeder, dazu beisteuern kann unseren Planeten mit seinen vielfältigen Lebewesen zu erhalten.", 
    "„Ich bin zutiefst überzeugt, dass es unendlich wichtig ist, vor allem Kindern beizubringen, allem Leben gegenüber respektvoll zu sein. Ich glaube, die wichtigste Botschaft an die Menschheit ist, dass jedes einzelne Individuum zählt, auch jedes nicht-menschliche. Jeder von uns hat in diesem Leben eine wichtige Rolle. Und jeder einzelne kann Änderungen bewirken. Daran glaube ich.“ (Jane Goodall)", 
    "Jane Goodall hat über 30 Sach- und Kinderbücher geschrieben sowie unzählige Beiträge in wissenschaftlichen Publikationen und Vorwörter in mehr als 100 Büchern anderer Autoren. Weltweit bekannt wurde ihr Buch „Wilde Schimpansen“, das 1971 erschien. In jüngster Zeit machten die Bestseller „Grund zur Hoffnung“ (1999) und „Africa in my Blood“ (2000) auf sich aufmerksam.", 
    "Quelle: https://www.lernhelfer.de/schuelerlexikon/biologie-abitur/artikel/jane-goodall#"]
};

let bild15: Zeichnungen = {
    name: "./styles/fotos/Malala_Yousafzai.jpg",
    nameZwei: "1997",
    id: "Malala Yousafzai",
    array: ["Malala Yousafzai ist eine pakistanische Menschenrechtsaktivistin, die sich international beachtet bereits als Schülerin gegen die Unterdrückung und für das Recht von Kindern auf Bildung in ihrer Heimat einsetzte, 2012 bei einem Attentat der Taliban schwer verletzt wurde und 2014 den Friedensnobelpreis erhielt. Sie wurde am 12. Juli 1997 in Mingora in Pakistan geboren. In diesem Jahr feiert Yousafzai ihren 24. Geburtstag.", 
    "Malala Yousafzai wurde am 12. Juli 1997 in Mingora (Pakistan) geboren. Bis sie elf Jahre alt war, verbrachte sie ein - für pakistanische Verhältnisse - normales Leben.", 
    "Doch 2007 übernahmen Taliban die Herrschaft über Malalas Heimat. Diese Gruppe radikaler Islamisten steht oft im Zusammenhang mit Terrorismus und wird verdächtigt, an den Anschlägen auf das World Trade Center in den USA vom 11. September 2001 beteiligt gewesen zu sein. Die Taliban wollen einen Gottesstaat errichten. Sie wollen zum Beispiel erreichen, dass Frauen in der Öffentlichkeit Burkas (Ganzkörperschleier) tragen müssen, nicht arbeiten und ab einem Alter von acht Jahren nicht mehr zur Schule gehen dürfen.", 
    "Diese, für die westliche Welt, unverständliche Unterdrückung von Frauen machte die Webseite des TV-Senders BBC zum Thema. Malalas Vater, Ziauddin Yousafzai, schlug seine Tochter als Autorin für den Blog - Gul Makai - (Kornblume) vor.", 
    "In kurzen Notizen beschrieb Malala fortan zehn Wochen lang, wie die Taliban die Menschen unterdrückten. Sie erzählte von Selbstmordattentaten, Angst und Trauer und insbesondere von Mädchen, die nicht mehr zur Schule gehen durften. Innerhalb kürzester Zeit wurde sie weltweit berühmt: Sie trat in Fernsehshows auf und gab Interviews zu den Themen Bildung und Frauen. Als eine der wenigen traute sie sich in die Öffentlichkeit. Ende Dezember erhielt sie für ihr Engagement den pakistanischen Friedenspreis.", 
    "Doch den Taliban war sie ein Dorn im Auge. Sie wollten das Mädchen ruhigstellen. Deshalb stürmten sie im Oktober 2012 einen Bus, in dem Malala saß und schossen auf sie. Malala wurde schwer verletzt und musste zuletzt in einer Fachklinik in Großbritannien behandelt werden.", 
    "Aber das furchtbare Attentat ging für die Taliban trotzdem nach hinten los: Denn es verhalf der jungen Freiheitskämpferin zu noch mehr Berühmtheit. Malala gilt seither für Frauen weltweit als Symbolfigur für Freiheit und Bildung. Im Jahr 2014 bekam Malala sogar den Friedensnobelpreis.", 
    "Im Jahr 2017 wurde Malala Yousefzai zur UN-Friedensbotschafterin ernannt. Mit nur 19 Jahren ist die jüngste Friedensnobelpreisträgerin der Welt nun auch die jüngste UN-Friedensbotschafterin weltweit. Am 10. April 2017 verlieh ihr der UN-Generalsekretär António Guterres bei den Vereinten Nationen den Titel.", 
    "Quelle: https://www.geo.de/geolino/mensch/2517-rtkl-weltveraenderer-malala-yousafzai"]
};



let bild16: Zeichnungen = { 
    name: "./styles/fotos/Greta_Thunberg.jpg",
    nameZwei: "2003",
    id: "Greta Thunberg",
    array: ["Greta Thunberg ist eine schwedische Klimaschutzaktivistin, die mit ihren Protesten für ein stärkeres Engagement gegen den Klimawandel aufmerksam macht. 2018 initiierte sie die internationale Schulstreik-Bewegung „Fridays For Future“ und wurde zur weltweiten Symbolfigur für mehr Klimaschutz. Greta Thunberg wurde am 3. Januar 2003 in Schweden geboren.",
    "Ihr voller Name ist Greta Tintin Eleonora Ernman Thunberg. Mit elf Jahren verweigert sie plötzlich die Nahrungsaufnahme und zeigt Symptome einer Depression. Daraufhin wird bei ihr das Asperger-Syndrom, eine Form des Autismus diagnostiziert. Mit acht Jahren wird sie erstmals auf das Thema Erderwärmung aufmerksam, was sie nicht mehr loslässt.", 
    "Einige ihrer ersten Aktionen fanden noch im Elternhaus statt, als sie dort zum Beispiel die Beleuchtung ausschaltete. Sie entscheidet sich wenig später für eine vegane Lebensweise und nimmt sich vor nicht mehr zu fliegen. Im Mai 2018 gewinnt sie einen von der Tageszeitung „Svenska Dagbladet“ initiierten Schreibwettbewerb zum Thema Umweltpolitik. Dieser Artikel stieß auf großes öffentliches Interesse. Daraufhin knüpft sie Kontakte, die sie in ihrem Engagement unterstützen und inspirieren. 2018 (mitten in der Hitzewelle) demonstriert sie das erste Mal mit einem Plakat, mit der Aufschrift „Skolstrejk för Klimatet“ vor dem schwedischen Reichstag.", 
    "Es schließen sich ihr immer mehr Schüler aus dem ganzen Land an und demonstrieren vor den kommunalen Verwaltungsgebäuden. Die Aktionen weiten sich zunächst europaweit und später zur globalen Fridays for Future-Bewegung aus. Diese demonstrierte beispielsweise am 19. März 2019 in 125 Ländern an 2032 Orten mit insgesamt 1,5 Millionen Schülern. Greta Thunberg wird zu einer Symbolfigur der Klimaschutz-Bewegung und erregt zudem die Aufmerksamkeit internationaler Medien.", 
    "Doch ihr Engagement geht weit über das Streiken hinaus. Sie ist präsent in den Medien, gibt zum Beispiel Interviews, trifft Politiker und hält Reden auf internationalen Klimaschutz-Konferenzen. Auf dem Weltklimagipfel 2018 im polnischen Kattowitz traf sie beispielsweise UN-Generalsekretär Antonio Guterres und sprach außerdem im Januar 2019 auf dem Weltwirtschaftsforum in der Schweiz. Selbst in diesen Fällen verzichtet sie bewusst auf das Fliegen, sondern reist im E-Auto oder mit dem Zug an.", 
    "Gretas Ziel ist es, in ihrem Heimatland die Emissionen von Treibhausgas um 15 Prozent pro Jahr zu reduzieren. Sie fordert alle reichen Staaten auf, sich an das Pariser Abkommen zu halten, denn in ihren Augen kümmere sich die etablierte Politik nur halbherzig um den Klimaschutz. Für ihr Engagement wurde Greta Thunberg bereits mehrfach geehrt. Sie wurde unter anderem zur wichtigsten Frau Schwedens gekürt, mit der Goldenen Kamera ausgezeichnet und für den Friedensnobelpreis nominiert. Schon heute kann man sagen, dass Greta Thunberg die Jugend mobilisiert und das Bewusstsein für den Klimaschutz in den Vordergrund gerückt hat.", 
    "Quelle: https://www.was-war-wann.de/personen/greta-thunberg.html"]
};



let zeichnung: Zeichnungen[] = [bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9, bild10, bild11, bild12, bild13, bild14, bild15, bild16];


function writeHTML(): void {
    for (let i: number = 0; i < zeichnung.length; i++) {
        /*console.log(zeichnung[i]);*/

        // schreibt Frauennamen in die Zeitleiste und erstellt li
        let prodElement: HTMLDivElement = document.createElement("div");
        let gewählt: string = `<li><p id="${zeichnung[i].id}"> ${zeichnung[i].nameZwei} </p></li>`;
        prodElement.innerHTML = gewählt;
        document.getElementById("klein").appendChild(prodElement);

        // zeigt auf der Seite gleich erste Info an
        let neu: string =
            `<img id="vorhanden" src="${zeichnung[0].name}">
        <p>${zeichnung[0].id}</p> 
        <div id="anfangInfo"> ${zeichnung[0].array[0]} </div>`;
        document.getElementById("groß").innerHTML = "";
        document.getElementById("groß").innerHTML = `${neu}`;
    }
}

writeHTML();
let a: number = 0;
let b: number = 0;
let tiktak: HTMLAudioElement = <HTMLAudioElement>document.getElementById("sound");
let error: HTMLAudioElement = <HTMLAudioElement>document.getElementById("audio");
let d: number = 0;

function test(_event: Event): void {
    let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

    console.log(target.id);
    if (target.id == "vorwärts" && d <= 14) { 
        d++; 
    }
    else if (target.id == "rückwärts" && d > 0) {
        d--;
    }
    document.getElementById("uhrEinfügenZ").style.transform = `rotate(${(360 / 16) * d + "deg"})`;
}



//Uhr Animation Klasse hinzufügen und nach bestimmter Zeit wieder entfernen. 
// let timeout: number;
// let udObject: HTMLElement = document.getElementById("uhrEinfügenZ");

// //Vorwärts Zeiger
// function uhrEinfügen(): void {
//     //Uhr
//     if (b <= 15) {
//         udObject.classList.add("uhr_active");
//         setTimeout(callback, 1000);
//     }
// }

// // if(1 Sekunde vorbei)
// function callback(): void {
//     document.getElementById("uhrEinfügenZ").classList.remove("uhr_active");
// }

// //Rückwärts Zeiger
// function uhrEinfügenZwei(): void {
//     //Uhr
//     if (b >= 0) {
//         udObject.classList.add("uhr_activezwei");
//         setTimeout(callbackZwei, 1000);
//     }
// }

// // if(1 Sekunde vorbei)
// function callbackZwei(): void {
//     document.getElementById("uhrEinfügenZ").classList.remove("uhr_activezwei");
// }



//Zeitstrahl 
let linieF: number = 0;
let position: Zeichnungen;
let kontrolle: boolean = false;

function bildGroß(_event: MouseEvent): void {

    // console.log(b);
    // a = 0;
    position = zeichnung[b];
    let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

    // Ende der Leiste
    if (b >= 16) {
        b = 15;
    }

    // style
    if (b >= 15) {
        linieF = 100;
    }

    // Anfang der Leiste
    else if (b <= -1 && kontrolle == true) {
        b = 0;
        linieF = 0;
    }


    // vorwärts button
    if (target.id == "vorwärts") {

        function callback(): void {
            document.getElementById("vorwärts").classList.remove("buttonDown");
        }

        document.getElementById("vorwärts").className = "buttonDown";
        console.log(document.getElementById("vorwärts").classList);
        setTimeout(callback, 100);

        kontrolle = true;
        b++;
        // console.log(a);
        a = 0;

        //Ton
        // console.log(b);
        if (b <= 15 && b >= 0) {
            tiktak.play();
            // console.log(b);
        }
        if (b > 15 || b < 0) {
            error.play();
        }

        let gewählt: string =
            `<img id="vorhanden" src="${zeichnung[b].name}">
        <p>${zeichnung[b].id}</p> 
        <div id="anfangInfoV"> ${zeichnung[b].array[0]} </div>
        <div id="rechts"></div>`;

        document.getElementById("groß").innerHTML = "";
        document.getElementById("groß").innerHTML = `${gewählt}`;
        document.getElementById("rechts").addEventListener("click", buttondiv);
        // console.log(a);

        // 'style'
        if (linieF != 100 && b > 0) {
            linieF = linieF + 6.6;
            document.getElementById("linieFortschritt").style.width = `${linieF}%`;
        }

    }

    // rückwärts button
    if (target.id == "rückwärts") {

        function callback2(): void {
            document.getElementById("rückwärts").classList.remove("buttonDown");
        }

        document.getElementById("rückwärts").className = "buttonDown";
        console.log(document.getElementById("rückwärts").classList);
        setTimeout(callback2, 100);

        b--;
        a = 0;
        //Ton
        // console.log(b);
        if (b < 15 && b > 0) {
            tiktak.play();
            // console.log(b);
        }
        if (b > 15 || b < 0) {
            error.play();
        }

        let gewählt: string =
            `<img id="vorhanden" src="${zeichnung[b].name}"> 
        <p>${zeichnung[b].id}</p>
        <div id="anfangInfoR"> ${zeichnung[b].array[0]} </div>
        <div id="rechts"></div>`;

        // let prodElement: HTMLDivElement;

        document.getElementById("groß").innerHTML = "";
        // prodElement = document.createElement("div");
        // prodElement.innerHTML = gewählt;
        // document.getElementById("groß").appendChild(prodElement);
        document.getElementById("groß").innerHTML = `${gewählt}`;
        document.getElementById("rechts").addEventListener("click", buttondiv);

        // 'style'
        linieF = linieF - 6.6;
        if (b == 0) {
            linieF = 0;
        }
        if (b >= 15) {
            linieF = 100;
        }
        document.getElementById("linieFortschritt").style.width = `${linieF}%`;

    }

    // console.log(b);
    // console.log(a);
}

// Im Content Infoslider



function buttondiv(): void {
    let prodElement2: HTMLDivElement;
    let c: number = b;
    console.log(a);

    function callback3(): void {
        document.getElementById("rechts").classList.remove("buttonDown2");
    }

    document.getElementById("rechts").className = "buttonDown2";
    console.log(document.getElementById("rechts").classList);
    setTimeout(callback3, 100);


    // erstellt das div nur, wenn noch keine infoText auf der Website vorhanden ist
    if (!document.getElementById("infoText")) {
        prodElement2 = document.createElement("div");
        prodElement2.innerHTML = `<div id="infoText"></div>`;
        document.getElementById("groß").appendChild(prodElement2);
    }


    if (c > 15) {
        c = 15;
    }

    if (c < 0) {
        c = 0;
    }

    document.getElementById("infoText").innerHTML = "";
    a++;
    console.log(a);
    document.getElementById("infoText").innerHTML = `${zeichnung[c].array[a]}`;
    console.log(a);

    if (a == zeichnung[c].array.length - 1) {
        a = -1;
        // console.log(a); 
        // console.log("Ende");
    }

}