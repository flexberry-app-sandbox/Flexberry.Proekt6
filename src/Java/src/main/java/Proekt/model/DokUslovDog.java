package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ДокУсловДог
 */
@Entity(name = "IISProektДокУсловДог")
@Table(schema = "public", name = "ДокУсловДог")
public class DokUslovDog {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Длительность")
    private Integer длительность;

    @Column(name = "СумПоДогов")
    private Float сумподогов;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончан")
    private Date датаокончан;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokSmeta")
    @Convert("DokSmeta")
    @Column(name = "ДокСмета", length = 16, unique = true, nullable = false)
    private UUID _doksmetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokSmeta", insertable = false, updatable = false)
    private DokSmeta doksmeta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ob'ektSMR")
    @Convert("Ob'ektSMR")
    @Column(name = "ОбъектСМР", length = 16, unique = true, nullable = false)
    private UUID _ob'ektsmrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ob'ektSMR", insertable = false, updatable = false)
    private Ob'ektSMR ob'ektsmr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;


    public DokUslovDog() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getДлительность() {
      return длительность;
    }

    public void setДлительность(Integer длительность) {
      this.длительность = длительность;
    }

    public Float getСумПоДогов() {
      return сумподогов;
    }

    public void setСумПоДогов(Float сумподогов) {
      this.сумподогов = сумподогов;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончан() {
      return датаокончан;
    }

    public void setДатаОкончан(Date датаокончан) {
      this.датаокончан = датаокончан;
    }


}